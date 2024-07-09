"use client";

import Image from "next/image";
import { DocumentIcon } from "@/components/icons";
import { Separator } from "@/components//ui/separator";
import { InfoModal } from "./info-modal";

interface InfoCardProps {
  hostIdentity: string;
  viewerIdentity: string;
  name: string;
  thumbnailUrl: string | null;
}

export const InfoCard = ({
  hostIdentity,
  viewerIdentity,
  name,
  thumbnailUrl,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) {
    return null;
  }
  return (
    <div className="px-4">
      <div className="rounded-xl bg-background border border-white/2.5">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="rounded-md bg-blue-600 p-2 h-auto w-auto">
            <DocumentIcon strokeWidth="0.5" className="h-4 w-4" />
          </div>
          <div>
            <h2>Your stream info</h2>
            <p className="text-muted-foreground text-xs lg:text-sm">
              Edit your stream info to Maximize your visibility
            </p>
          </div>
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className="p-4 lg:p-6 space-y-4">
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Name</h3>
            <p className="text-sm font-semibold">{name}</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Thumbnail</h3>
            {thumbnailUrl ? (
              <div className="relative aspect-video rounderd-md overflow-hidden w-[200px] border border-white/10">
                <Image
                  fill
                  src={thumbnailUrl}
                  alt={name}
                  className="object-cover"
                />
              </div>
            ) : (
              <p className="text-sm">
                No thumbnail. Click Eidt to add a thumbnail
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
