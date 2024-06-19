import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

type Props = {};

const Goodbye = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-6 md:gap-12 md:px-36 px-4 md:pb-12 pb-4 pt-4">
      <div className="md:pl-6 flex flex-col justify-start gap-4">
        <h1 className="font-overused text-5xl">
          Say goodbye <br /> to your bank
        </h1>
        <p className="font-overused text-textgray md:text-xl">
          Lulo is the new way of earning interest <br /> from multiple providers automatically.
        </p>
        <Image
          src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/2ddf4436-4f29-45f4-87a8-3d8c4f3ea313"
          alt="bleh"
          width={440}
          height={113}
        />
      </div>
      <Image
        src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/bd0f9c67-2f49-47f0-aa9f-5de9ba5a3cb9"
        alt="stats graphic"
        width={624}
        height={466}
        className="hidden md:block"
      />
      <Image
        src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/07a698e9-c299-4599-ae88-8edd03b34ff3"
        alt="stats graphic"
        width={382}
        height={548}
        className="md:hidden"
      />
    </div>
  );
};

export default Goodbye;
