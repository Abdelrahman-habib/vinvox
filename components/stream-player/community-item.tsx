"use client";

import { useTransition } from "react";

import { onBlock } from "@/actions/block";
import { cn, stringToColor } from "@/lib/utils";

import { toast } from "sonner";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

import { LoaderIcon, UserXIcon } from "@/components/icons";

interface CommunityItemProps {
  hostName: string;
  viewerName: string;
  participantName?: string;
  participantIdentity: string;
}

export const CommunityItem = ({
  hostName,
  viewerName,
  participantName,
  participantIdentity,
}: CommunityItemProps) => {
  const [isPending, startTransition] = useTransition();

  const isSelf = viewerName === participantName;
  const isHost = viewerName === hostName;

  const color = stringToColor(participantName || "");

  const handleBlock = () => {
    if (!participantName || isSelf || !isHost) return;

    startTransition(() => {
      onBlock(participantIdentity)
        .then(() => {
          toast.success(`blocked ${participantName}`);
        })
        .catch(() => {
          toast.error("Somthing went wrong");
        });
    });
  };
  return (
    <div
      className={cn(
        "group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <p style={{ color }}>{participantName}</p>
      {isHost && !isSelf && (
        <Hint label="Block">
          <Button
            variant="ghost"
            disabled={isPending}
            onClick={handleBlock}
            className="h-auto w-auto p-2 opacity-0 group-hover:opacity-100 transtion text-white/50 hover:text-white"
          >
            {isPending ? (
              <LoaderIcon className="w-5 h-5 animate-spin" strokeWidth="0.5" />
            ) : (
              <UserXIcon className="w-5 h-5" strokeWidth="0.5" />
            )}
          </Button>
        </Hint>
      )}
    </div>
  );
};
