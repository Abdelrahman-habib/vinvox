"use client";

import { useState, useTransition, useRef, ElementRef } from "react";
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
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/lib/uploadthing";

import { LoaderIcon, PencilIcon, TrashIcon } from "@/components/icons";
import { Hint } from "@/components/hint";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal = ({
  initialName,
  initialThumbnailUrl,
}: InfoModalProps) => {
  const router = useRouter();
  const closeButtonRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onRemoveThumbnail = () => {
    startTransition(() => {
      updateStream({ thumbnailUrl: null })
        .then(() => {
          toast.success("Thumbnail removed");
          setThumbnailUrl(null);
        })
        .catch(() => {
          toast.error("Failed to remove thumbnail");
        });
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      updateStream({ name })
        .then(() => {
          toast.success("Stream info updated");
          closeButtonRef.current?.click();
        })
        .catch(() => {
          toast.error("Failed to update stream info");
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
          <DialogTitle>Edit Stream Info</DialogTitle>
          <DialogDescription>
            Edit your stream info to Maximize your visibility
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream name"
              value={name}
              disabled={isPending}
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            {thumbnailUrl ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-2 right-2 z-[10]">
                  <Hint label="Remove Thumbnail" asChild side="left">
                    <Button
                      type="button"
                      disabled={isPending}
                      variant="ghost"
                      size="sm"
                      onClick={onRemoveThumbnail}
                      className="h-auto w-auto p-1.5 bg-background"
                    >
                      <TrashIcon strokeWidth="0.5" className="h-4 w-4" />
                    </Button>
                  </Hint>
                </div>
                <Image
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  appearance={{
                    label: {
                      color: "#FFFFFF",
                    },
                    allowedContent: {
                      color: "#FFFFFF",
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    setThumbnailUrl(res?.[0]?.url);
                    router.refresh();
                    closeButtonRef.current?.click();
                  }}
                />
              </div>
            )}
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
