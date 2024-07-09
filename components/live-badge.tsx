import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LiveBadgeProps {
  className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5  px-1.5 rounded-md uppercase text-[10px] border border-background font-bold tracking-wide",
        className
      )}
    >
      Live
    </div>
  );
};

export const LiveBadgeSkeleton = () => {
  return <Skeleton className="w-10 h-5" />;
};
