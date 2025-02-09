"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import { CopyIcon } from "@/components/icons";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const Icon = isCopied ? CheckCheck : CopyIcon;

  return (
    <Hint label={isCopied ? "" : "Copy"} side="top" asChild>
      <Button
        onClick={onCopy}
        disabled={!value || isCopied}
        variant="ghost"
        size="sm"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};
