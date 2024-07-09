"use server";

import { User } from "@prisma/client";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const updateUser = async (values: Partial<User>) => {
  try {
    const validData = {
      bio: values.bio,
    };

    const self = await getSelf();

    const updatedUser = await db.user.update({
      where: {
        id: self.id,
      },
      data: {
        ...validData,
      },
    });

    revalidatePath(`/${self.username}`);
    revalidatePath(`/u/${self.username}`);

    return updatedUser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
