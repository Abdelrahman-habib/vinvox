"use client";

import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { UnblockButton } from "./unblock-button";

export type BlockedUsers = {
  id: string;
  userId: string;
  imgUrl: string;
  username: string;
  createdAt: string;
};

export const columns: ColumnDef<BlockedUsers>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="subtle"
          className="border-none px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : (
            <ArrowDown className="mr-2 h-4 w-4" />
          )}
          Username
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <UserAvatar
          imgUrl={row.original.imgUrl}
          username={row.original.username}
        />
        <span>{row.original.username}</span>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="subtle"
          className="border-none px-0 hidden md:flex"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : (
            <ArrowDown className="mr-2 h-4 w-4" />
          )}
          blocked at
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="hidden md:flex">{row.original.createdAt}</span>
    ),
  },
  {
    id: "action",
    cell: ({ row }) => <UnblockButton userId={row.original.userId} />,
  },
];
