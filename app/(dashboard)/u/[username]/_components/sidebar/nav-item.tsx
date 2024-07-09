"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Hint } from "@/components/hint";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
}: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Hint
      className="lg:hidden"
      label={label}
      side="right"
      align="start"
      asChild
    >
      <Button
        variant="ghost"
        className={cn(
          "w-full h-12",
          collapsed ? "justify-center" : "justify-start",
          isActive && "bg-accent"
        )}
        asChild
      >
        <Link href={href}>
          <div className="flex items-center gap-x-4">
            <Icon
              className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")}
              aria-hidden="true"
              stroke=""
              strokeWidth={1.5}
            />
            {!collapsed && <span>{label}</span>}
          </div>
        </Link>
      </Button>
    </Hint>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
