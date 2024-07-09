"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = async () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`You are now following ${data?.following.username}`);
        })
        .catch(() => {
          toast.error("Somthing went wrong");
        });
    });
  };

  const handleUnfollow = async () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(`unfollowed ${data?.following.username}`);
        })
        .catch(() => {
          toast.error("Somthing went wrong");
        });
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => {
          toast.success(`unblocked ${data?.blocked.username}`);
        })
        .catch(() => {
          toast.error("Somthing went wrong");
        });
    });
  };

  return (
    <>
      <Button disabled={isPending} onClick={onClick} variant="primary">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button onClick={handleBlock} disabled={isPending} variant="destructive">
        Unblock
      </Button>
    </>
  );
};
