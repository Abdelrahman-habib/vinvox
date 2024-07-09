"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ChatToggle } from "./chat-toggle";
import { VariantToggle } from "./variant-toggle";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      <div className="absolute top-2 left-2 hidden lg:block">
        <ChatToggle />
      </div>
      <p className="text-primary font-semibold text-center">Stream Chat</p>
      <div className="absolute top-1.5 right-2">
        <VariantToggle />
      </div>
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative p-3 border-b hidden md:block">
      <Skeleton className="absolute top-3 left-3 h-6 w-6" />
      <Skeleton className="w-28 h-6 mx-auto" />
    </div>
  );
};
