"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import {
  ArrowCollapseLeftIcon,
  ArrowCollapseRightIcon,
} from "@/components/icons";

export const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useCreatorSidebar(
    (state) => state
  );

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed ? (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button variant="ghost" className="h-auto p-2" onClick={onExpand}>
              <ArrowCollapseRightIcon className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      ) : (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
          <p className="font-semibold text-primary">Dashboard</p>
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
