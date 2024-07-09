"use client";

import { ConnectionState, Track } from "livekit-client";
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";
import { Content } from "@radix-ui/react-tooltip";
import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";
import { LiveVideo } from "./live-video";
import { Skeleton } from "@/components/ui/skeleton";
interface VideoProps {
  hostName: string;
  hostIdentity: string;
}

export const Video = ({ hostName, hostIdentity }: VideoProps) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity);

  let contect;
  if (!participant && connectionState === ConnectionState.Connected) {
    contect = <OfflineVideo username={hostName} />;
  } else if (!participant || tracks.length === 0) {
    contect = <LoadingVideo label={connectionState} />;
  } else {
    contect = <LiveVideo participant={participant} />;
  }

  return <div className="aspect-video border-b group relative">{contect}</div>;
};

export const VideoSkeleton = () => {
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="w-full h-full rounded-none" />
    </div>
  );
};
