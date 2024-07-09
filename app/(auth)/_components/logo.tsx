import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const Logo = () => {
  return (
    <div className="flex items-center flex-col ">
      <div>
        <Image
          priority={true}
          src="/spooky.svg"
          alt="vinvox logo"
          width={80}
          height={80}
          className="rounded-full w-20 h-20 object-cover "
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Vinvox</p>
        <p className="text-sm text-white/65">Let&apos;s stream</p>
      </div>
    </div>
  );
};
