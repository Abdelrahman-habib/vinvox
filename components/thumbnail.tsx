import { UserAvatar } from "@/components/user-avatar";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge, LiveBadgeSkeleton } from "@/components/live-badge";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content;

  if (!src) {
    content = (
      <div className="bg-card flex flex-col items-center absolute top-0 left-0 justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
        <UserAvatar
          size="lg"
          imgUrl={fallback}
          username={username}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        alt="thumbnail"
        fill
        className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md"
      />
    );
  }
  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      <div className="rounded-md absoluate inset-0 bg-[#555b89] opacity-0 w-full h-full group-hover:opacity-100 transition-opacity flex items-center justify-center" />
      {content}
      {isLive && (
        <div className="absolute top-[5%] left-[5%] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <div className="absolute top-[5%] left-[5%] ">
        <LiveBadgeSkeleton />
      </div>
      <Skeleton className="w-full h-full" />
    </div>
  );
};
