"use client";

import {
  ArrowCollapseLeftIcon,
  ArrowCollapseRightIcon,
} from "@/components/icons";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
  const { collapsed, onCollapse, onExpand } = useChatSidebar((state) => state);

  const Icon = collapsed ? ArrowCollapseLeftIcon : ArrowCollapseRightIcon;
  const label = collapsed ? "Expand" : "Collapse";

  const onToggle = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  return (
    <Hint label={label} side="left" asChild>
      <Button
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
        onClick={onToggle}
      >
        <Icon className="h-5 w-5" />
      </Button>
    </Hint>
  );
};
