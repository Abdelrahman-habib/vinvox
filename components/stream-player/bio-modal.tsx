"use client";

import { useState, useTransition, useRef, ElementRef } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

import { LoaderIcon, PencilIcon } from "@/components/icons";
import { Hint } from "@/components/hint";

import { updateUser } from "@/actions/user";

interface BioModalProps {
  initiaBio: string | null;
}

export const BioModal = ({ initiaBio }: BioModalProps) => {
  const router = useRouter();
  const closeButtonRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();
  const [bio, setBio] = useState(initiaBio);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      updateUser({ bio })
        .then(() => {
          toast.success("Bio updated");
          closeButtonRef.current?.click();
          router.refresh();
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <Dialog>
      <Hint label="Edit" asChild>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="ml-auto ">
            <PencilIcon strokeWidth="0.5" className="h-4 w-4" />
          </Button>
        </DialogTrigger>
      </Hint>
      <DialogContent className="backdrop-filter backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>Edit Your Bio</DialogTitle>
          <DialogDescription>
            Tell your audience More about yourself.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
              placeholder="say something about yourself"
              value={bio || ""}
              disabled={isPending}
              onChange={onChange}
              className="resize-none"
            />
          </div>
          <div className="flex justify-between">
            <DialogClose asChild>
              <Button ref={closeButtonRef} type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="primary" type="submit" disabled={isPending}>
              {isPending ? (
                <span className="text-center px-1.5">
                  <LoaderIcon className="animate-spin w-4 h-4" />
                </span>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
