import { StreamPlayerSkeleton } from "@/components/stream-player";

const LoadingPage = () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton></StreamPlayerSkeleton>{" "}
    </div>
  );
};

export default LoadingPage;
