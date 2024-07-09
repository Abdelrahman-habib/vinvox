"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  MessageIcon,
  KeyIcon,
  UsersIcon,
  MonitorIcon,
} from "@/components/icons";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { NavItem, NavItemSkeleton } from "./nav-item";

export const Navigation = () => {
  const { collapsed } = useCreatorSidebar((state) => state);
  const pathname = usePathname();
  const { user } = useUser();
  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: MonitorIcon,
    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyIcon,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageIcon,
    },
    {
      label: "Community",
      href: `/u/${user?.username}/community`,
      icon: UsersIcon,
    },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          href={route.href}
          isActive={pathname === route.href}
          icon={route.icon}
        />
      ))}
    </ul>
  );
};
