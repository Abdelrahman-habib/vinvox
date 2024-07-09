import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getBlockedUsers = async () => {
  const self = await getSelf();
  const blockedUsers = await db.block.findMany({
    where: {
      blockerId: self.id,
    },
    include: {
      blocked: true,
    },
  });
  return blockedUsers;
};

export const getBlockingUsers = async () => {
  try {
    const self = await getSelf();
    const blockingUsers = await db.block.findMany({
      where: {
        blockedId: self.id,
      },
      include: {
        blocker: true,
      },
    });
    return blockingUsers;
  } catch {
    return [];
  }
};

export const isBlockedByUser = async (userId: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (otherUser.id === self.id) {
      return false;
    }

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: { blockerId: otherUser.id, blockedId: self.id },
      },
    });
    return !!existingBlock;
  } catch {
    return false;
  }
};

export const isBlockingUser = async (userId: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!otherUser) {
      throw new Error("User not found");
    }

    if (otherUser.id === self.id) {
      return false;
    }

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: { blockerId: self.id, blockedId: otherUser.id },
      },
    });
    return !!existingBlock;
  } catch {
    return false;
  }
};

export const blockUser = async (userId: string) => {
  const self = await getSelf();

  if (userId === self.id) {
    throw new Error("Cannot block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: { blockerId: self.id, blockedId: otherUser.id },
    },
  });

  if (existingBlock) {
    throw new Error("Already blocked");
  }

  const blockedUser = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: otherUser.id,
    },
    include: {
      blocked: true,
    },
  });

  return blockedUser;
};

export const unblockUser = async (userId: string) => {
  const self = await getSelf();
  if (self.id === userId) {
    throw new Error("Cannot unblock yourself");
  }
  const otherUser = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: { blockerId: self.id, blockedId: otherUser.id },
    },
  });
  if (!existingBlock) {
    throw new Error("Not blocked");
  }
  const unblockedUser = await db.block.delete({
    where: {
      id: existingBlock.id,
    },
    include: {
      blocked: true,
    },
  });
  return unblockedUser;
};
