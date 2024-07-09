import { Check } from "lucide-react";

export const VerifiedMark = () => {
  return (
    <div className="p-[3px] flex items-center justify-center h-5 w-5 bg-blue-600 [clip-path:polygon(50%_0%,83%_12%,100%_43%,94%_78%,68%_100%,32%_100%,6%_78%,0%_43%,17%_12%)]">
      <Check className="w-[h-10px] h-[10px] text-primary stroke-[4px]" />
    </div>
  );
};
