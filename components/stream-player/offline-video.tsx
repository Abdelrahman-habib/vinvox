import { VideoSlashIcon } from "@/components/icons";

interface OfflineVideoProps {
  username: string;
}

export const OfflineVideo = ({ username }: OfflineVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center">
      <VideoSlashIcon className="w-10 h-10 text-muted-foreground" />
      <p className="text-center text-sm text-muted-foreground">
        {username} is currently offline
      </p>
    </div>
  );
};
