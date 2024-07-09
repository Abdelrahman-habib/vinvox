import Image from "next/image";
import Link from "next/link";
import { Space_Mono as Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center transition-all gap-x-4 hover:opacity-75">
        <div className="rounded-full p-0 mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image
            priority={true}
            src="/spooky.svg"
            alt="vinvox logo"
            width={50}
            height={50}
            className="transition-all rounded-full aspect-square object-cover"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold ">Vinvox</p>
          <p className="text-xs text-muted-foreground  tracking-tighter">
            Let&apos;s play
          </p>
        </div>
      </div>
    </Link>
  );
};
