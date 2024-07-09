"use server";

import { revalidatePath } from "next/cache";

import { blockUser, unblockUser } from "@/lib/block-service";
import { getSelf } from "@/lib/auth-service";
import { RoomServiceClient } from "livekit-server-sdk";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  try {
    const self = await getSelf();

    let blockedUser;
    // TODO: allow ability to kick the guest from the livestream
    try {
      blockedUser = await blockUser(id);
    } catch (error) {
      //this means is a guest
    }
    try {
      await roomService.removeParticipant(self.id, id);
    } catch (error) {
      //user not in the room
    }
    revalidatePath(`/u/${self.username}/community`);
    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }
    return blockedUser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const onUnblock = async (id: string) => {
  try {
    const self = await getSelf();
    const unblockedUser = await unblockUser(id);

    revalidatePath(`/u/${self.username}/community`);
    return unblockedUser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
