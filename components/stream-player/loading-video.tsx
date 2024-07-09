import { LoaderIcon } from "@/components/icons";
import { VideoSlashIcon } from "@/components/icons";
import { ConnectionState } from "livekit-client";

interface LoadingVideoProps {
  label: string;
}

export const LoadingVideo = ({ label }: LoadingVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center">
      {label === ConnectionState.Disconnected ? (
        <VideoSlashIcon className="w-10 h-10 text-muted-foreground" />
      ) : (
        <LoaderIcon className="w-10 h-10 text-muted-foreground animate-spin" />
      )}
      <p className="text-center text-sm text-muted-foreground capitalize">
        {label}
      </p>
    </div>
  );
};
