"use client";

import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { EyeIcon, EyeSlashIcon } from "@/components/icons";
import { Hint } from "@/components/hint";

interface InputCardProps {
  label: string;
  showButton?: boolean;
  copyButton?: boolean;
  value: string | null;
}

export const InputCard = ({
  label,
  value,
  showButton = false,
  copyButton = true,
}: InputCardProps) => {
  const [show, setShow] = useState(!showButton);
  const Icon = show ? EyeSlashIcon : EyeIcon;
  return (
    <div className="rounded-xl space-y-4 bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="shrink-0 font-semibold">{label}</p>
        {showButton && (
          <Hint label={show ? "Hide" : "Show"} side="top" asChild>
            <Button
              disabled={!value}
              onClick={() => setShow(!show)}
              size="sm"
              variant="ghost"
            >
              <Icon className="h-4 w-4" />
            </Button>
          </Hint>
        )}
      </div>
      <div className="flex items-center gap-x-10">
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              type={show ? "text" : "password"}
              value={value || ""}
              disabled
              placeholder={label}
            />

            {copyButton && <CopyButton value={value || ""} />}
          </div>
        </div>
      </div>
    </div>
  );
};
