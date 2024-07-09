"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/use-sidebar";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import {
  ArrowCollapseLeftIcon,
  ArrowCollapseRightIcon,
} from "@/components/icons";
export const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed ? (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-5">
          <Hint label={label} side="right" asChild>
            <Button variant="ghost" className="h-auto p-2" onClick={onExpand}>
              <ArrowCollapseRightIcon className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      ) : (
        <div className="p-3 pt-4 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              variant="ghost"
              className="ml-auto h-auto p-2"
              onClick={onCollapse}
            >
              <ArrowCollapseLeftIcon className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full justify-between">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="w-6 h-6 " />
    </div>
  );
};
