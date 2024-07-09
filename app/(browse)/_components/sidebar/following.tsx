"use client";
import { useSidebar } from "@/store/use-sidebar";
import { Follow, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-itme";
import { Skeleton } from "@/components/ui/skeleton";
import { HeartIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FollowingProps {
  data: (Follow & {
    following: User & { stream: { isLive: boolean } | null };
  })[];
}

export const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;
  const showIcon = collapsed && data.length > 0;
  return (
    <div className={cn(data.length <= 0 && "hidden")}>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Followed</p>
        </div>
      )}
      {showIcon && (
        <div className="mb-4 w-full flex items-center justify-center">
          <HeartIcon className="h-5 w-5" />
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.followingId}
            username={follow.following.username}
            imgUrl={follow.following.imgUrl}
            isLive={follow.following.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="px-6 hidden lg:block">
        <Skeleton className="h-6 w-[120px]" />
      </div>
      <ul className="px-2 pt-2 lg:pt-0">
        {[...Array(3)].map((_, i) => (
          <UserItemSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
};
