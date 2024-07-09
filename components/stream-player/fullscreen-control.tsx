import { FullScreenIcon, ExitFullScreenIcon } from "@/components/icons";

import { Hint } from "@/components/hint";

interface FullScreenControlProps {
  isFullScreen: boolean;
  onToggle: () => void;
}

export const FullScreenControl = ({
  isFullScreen,
  onToggle,
}: FullScreenControlProps) => {
  const Icon = isFullScreen ? ExitFullScreenIcon : FullScreenIcon;
  const label = isFullScreen ? "Exit fullscreen" : "Fullscreen";
  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <button
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
          onClick={onToggle}
        >
          <Icon strokeWidth="0.5" className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};
