"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { HeartOutlineIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { onFollow, onUnfollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface ActionsProps {
  isFollowing: boolean;
  hostIdentity: string;
  isHost: boolean;
}

export const Actions = ({
  isFollowing,
  hostIdentity,
  isHost,
}: ActionsProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { userId } = useAuth();

  const handleFollow = async () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) => {
          toast.success(`You are now following ${data?.following.username}`);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };
  const handleUnfollow = async () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) => {
          toast.success(`unfollowed ${data?.following.username}`);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  const toggleFollow = async () => {
    if (!userId) {
      return router.push("/sign-in");
    }

    if (isHost) {
      return;
    }

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };
  return (
    <Button
      onClick={toggleFollow}
      variant="primary"
      size="sm"
      className="w-full lg:w-auto"
      disabled={isPending || isHost}
    >
      <HeartOutlineIcon
        className={cn("w-5 h-5 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export const ActionsSkeleton = () => {
  return <Skeleton className="w-full h-10 lg:w-24" />;
};
