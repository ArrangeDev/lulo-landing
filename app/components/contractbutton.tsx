import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

type Props = {};

const Contractbutton = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-start rounded-lg p-2 bg-[#0C4434] md:gap-2 ">
      <Image
        src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/d1d6f9aa-03fe-4305-8e11-b17683ee948f"
        alt="shield with tick"
        width={30}
        height={60}
      />
      <Separator orientation="vertical" className="bg-textgray" />
      <div className="md:text-xs text-[10px] text-textgray">
        <p className="text-white">Contract Audited</p>
        <p>By industry experts</p>
      </div>
      <div className="-rotate-45 text-sm text-textgray p-1">→</div>
    </div>
  );
};

export default Contractbutton;
