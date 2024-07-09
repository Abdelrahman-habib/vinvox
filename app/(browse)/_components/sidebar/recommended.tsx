"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-itme";
import { Skeleton } from "@/components/ui/skeleton";
import { StarIcon } from "@/components/icons";

interface RecommendedProps {
  data: (User & { stream: { isLive: boolean } | null })[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;
  const showIcon = collapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      {showIcon && (
        <div className="mb-4 w-full flex items-center justify-center">
          <StarIcon className="h-5 w-5" />
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imgUrl={user.imgUrl}
            isLive={user.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="px-6 hidden lg:block">
        <Skeleton className="h-6  w-[120px]" />
      </div>
      <ul className="px-2">
        {[...Array(3)].map((_, i) => (
          <UserItemSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
};
