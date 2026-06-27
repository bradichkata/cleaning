import Image from "next/image";
import { ambientBackgroundImages } from "@/data/media";

export function DecorativeBackgrounds() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-[21rem] top-[-7rem] h-[38rem] w-[78rem] rotate-[8deg] opacity-[0.24] blur-[3px]">
        <Image
          src={ambientBackgroundImages[0]}
          alt=""
          fill
          sizes="78rem"
          className="object-cover object-right"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 28% 46%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.72) 58%, transparent 82%)",
            maskImage:
              "radial-gradient(circle at 28% 46%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.72) 58%, transparent 82%)",
          }}
        />
      </div>
      <div className="absolute -left-[18rem] top-[32rem] h-[35rem] w-[72rem] rotate-[-7deg] opacity-[0.21] blur-[4px]">
        <Image
          src={ambientBackgroundImages[1]}
          alt=""
          fill
          sizes="72rem"
          className="object-cover object-left"
          style={{
            WebkitMaskImage:
              "linear-gradient(125deg, transparent 4%, rgba(0,0,0,0.96) 24%, rgba(0,0,0,0.63) 74%, transparent 96%)",
            maskImage:
              "linear-gradient(125deg, transparent 4%, rgba(0,0,0,0.96) 24%, rgba(0,0,0,0.63) 74%, transparent 96%)",
          }}
        />
      </div>
      <div className="absolute -right-[14rem] bottom-[4rem] h-[34rem] w-[66rem] rotate-[4deg] opacity-[0.18] blur-[5px]">
        <Image
          src={ambientBackgroundImages[2]}
          alt=""
          fill
          sizes="66rem"
          className="object-cover object-center"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 45% 45%, rgba(0,0,0,0.92) 20%, rgba(0,0,0,0.57) 64%, transparent 84%)",
            maskImage:
              "radial-gradient(circle at 45% 45%, rgba(0,0,0,0.92) 20%, rgba(0,0,0,0.57) 64%, transparent 84%)",
          }}
        />
      </div>
    </div>
  );
}
