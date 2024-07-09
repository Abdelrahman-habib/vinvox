"use client";

import { MessageIcon, UsersIcon } from "@/components/icons";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const isChat = variant === ChatVariant.CHAT;

  const Icon = isChat ? UsersIcon : MessageIcon;
  const label = isChat ? "Community" : "Chat";

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  return (
    <Hint label={label} side="left" asChild>
      <Button
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
        onClick={onToggle}
      >
        <Icon strokeWidth="0.5" className="h-5 w-5" />
      </Button>
    </Hint>
  );
};
