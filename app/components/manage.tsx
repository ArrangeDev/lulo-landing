import { Separator } from "@/components/ui/separator";
import React from "react";
import Contractbutton from "./contractbutton";
import FlipText from "@/components/magicui/flip-text";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Manage = (props: Props) => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-start md:px-60 px-6">
      <div className="flex md:flex-row flex-col justify-between w-full pb-12 pt-8">
        <div className="flex md:flex-col flex-row items-start justify-between md:gap-2 gap-4">
          <p className="text-textgray md:text-xl hidden md:block">
            It&apos;s better than your bank!
          </p>
          <p className="text-textgray md:text-xl md:hidden">
            It&apos;s better than <br /> your bank!
          </p>
          <Link href="/" className="hidden md:block">
            <Contractbutton />
          </Link>
          <Link href="/" className="md:hidden">
            <Image
              src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/14492776-6ed7-46d5-9f9e-b0b02445b92b"
              alt="security seal"
              width={200}
              height={30}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-around md:gap-12 gap-8 font-overused pt-8 md:pt-0 text-textgray">
          <div className="">
            <FlipText className="md:text-6xl text-4xl text-emerald" word="12.3%" />
            <p>Average APY</p>
          </div>
          <div>
            <FlipText className="md:text-6xl text-4xl text-emerald" word="2x" />
            <p>Earnings</p>
          </div>
          <div>
            <FlipText className="md:text-6xl text-4xl text-emerald" word="$191M" />
            <p>Total Earnings</p>
          </div>
        </div>
      </div>
      <Separator className="hidden md:block" />
    </div>
  );
};

export default Manage;
