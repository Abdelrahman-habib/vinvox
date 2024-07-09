"use server";

import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();
    const stream = await db.stream.findUnique({
      where: {
        userId: self.id,
      },
    });
    if (!stream) {
      throw new Error("Stream not found");
    }
    const validData = {
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatDelayed: values.isChatDelayed,
      isChatFollowersOnly: values.isChatFollowersOnly,
      thumbnailUrl: values.thumbnailUrl,
    };
    const updatedStream = await db.stream.update({
      where: {
        userId: self.id,
      },
      data: {
        ...validData,
      },
    });

    revalidatePath(`/u/${self.username}/chat`);
    revalidatePath(`/u/${self.username}`);
    revalidatePath(`/${self.username}`);

    return updatedStream;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
