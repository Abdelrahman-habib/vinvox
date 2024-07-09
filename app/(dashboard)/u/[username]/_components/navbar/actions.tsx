"use server";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { Hint } from "@/components/hint";
import { UpLeftArrowIcon } from "@/components/icons";

export const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-4 ml-4 lg:ml-0">
      <Hint className="lg:hidden" label="Exit" side="left" asChild>
        <Button
          size="sm"
          variant="ghost"
          className="text-muted-foreground hover:text-primary"
          asChild
        >
          <Link href="/">
            <UpLeftArrowIcon className="w-5 h-5 lg:mr-2" />
            <span className="hidden lg:block">Exit</span>
          </Link>
        </Button>
      </Hint>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
