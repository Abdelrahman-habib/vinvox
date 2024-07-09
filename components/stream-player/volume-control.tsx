"use client";
import { VolumeIcon, VolumeHalfIcon, VolumeXIcon } from "@/components/icons";

import { Hint } from "@/components/hint";
import { Slider } from "@/components/ui/slider";

interface VolumeControlProps {
  value: number;
  onChange: (value: number) => void;
  onToggle: () => void;
}

export const VolumeControl = ({
  value,
  onChange,
  onToggle,
}: VolumeControlProps) => {
  const isMuted = value === 0;
  const isAboveHalf = value > 50;

  let Icon = VolumeHalfIcon;
  if (isMuted) Icon = VolumeXIcon;
  if (isAboveHalf) Icon = VolumeIcon;

  const label = isMuted ? "Unmute" : "Mute";

  const handleChange = (value: number[]) => {
    onChange(value[0]);
  };
  return (
    <div className="flex items-center gap-2">
      <Hint label={label} asChild>
        <button
          onClick={onToggle}
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
        >
          <Icon strokeWidth="0.5" className="h-6 w-6" />
        </button>
      </Hint>
      <Slider
        className="w-[8rem] cursor-pointer"
        onValueChange={handleChange}
        value={[value]}
        max={100}
        step={1}
      />
    </div>
  );
};
