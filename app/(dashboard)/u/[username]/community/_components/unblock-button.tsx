"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { onUnblock } from "@/actions/block";
import { toast } from "sonner";
import { LoaderIcon } from "@/components/icons";

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) => {
          toast.success(`User ${result.blocked.username} unblocked`);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <Button
      className="w-full"
      variant="primary"
      onClick={onClick}
      disabled={isPending}
    >
      {isPending ? (
        <LoaderIcon strokeWidth={0.5} className="animate-spin h-4 w-4" />
      ) : (
        "Unblock"
      )}
    </Button>
  );
};
