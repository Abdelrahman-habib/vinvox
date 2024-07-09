"use client";
import { useState, useEffect } from "react";
import { useIsClient } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();

  const collapsed = useSidebar((state) => state.collapsed);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
        <FollowingSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50 py-4 lg:py-0",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
