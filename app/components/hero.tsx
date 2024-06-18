/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import AvatarCircles from "@/components/magicui/avatar-circles";
import Image from "next/image";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

type Props = {};

const avatarUrls = [
  "https://github.com/ArrangeDev/lulo-landing/assets/93305952/439365b5-dac5-441f-a931-90bc2e41c6e7",
  "https://github.com/ArrangeDev/lulo-landing/assets/93305952/62c80e2b-699d-4ccc-8321-16277f88a8f3",
  "https://github.com/ArrangeDev/lulo-landing/assets/93305952/d2231524-fa35-4eb5-b231-55c4bbe78629",
];

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-start gap-4 px-12">
        <WordFadeIn
          className="font-overused font-medium text-center md:text-6xl text-4xl md:px-20"
          words="Your new DeFi Savings Account"
        />

        <p className="text-textgray md:text-xl text-lg font-overused text-center md:px-24 hidden md:block">
          Lulo is the new way of earning interest from <br /> multiple providers automatically.
        </p>
        <p className="text-textgray md:text-xl text-lg font-overused text-center md:px-24 md:hidden">
          Lulo is the new way of earning interest from multiple providers automatically.
        </p>
        <div className="flex md:flex-row flex-col items-center justify-between md:gap-6 md:pt-2">
          <LinkPreview url="https://lulo.fi">
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} bg-emerald text-white h-[44px] w-[160px] hover:bg-white hover:text-emerald hover:animate-pulse hover:cursor-alias`}
            >
              Get Started
            </Link>
          </LinkPreview>
          <div className="flex flex-row items-center justify-between gap-4 pt-4 md:pt-0">
            <AvatarCircles avatarUrls={avatarUrls} />
            <p className="text-textgray">Join 2,349 others</p>
          </div>
        </div>
      </div>
      <Image
        src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/61f1f6f4-10d3-423e-81cf-863236dc059c"
        alt="Lulo Land"
        width={1300}
        height={325}
        className="pt-9 px-6 hidden md:block -mb-96"
        quality={100}
      />
      <Image
        src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/28e0b125-2f81-4b99-aa6e-38c83be58991"
        alt="Lulo Land"
        width={1300}
        height={325}
        className="pt-5 pl-2 md:hidden -mb-24"
        quality={100}
      />
    </div>
  );
};

export default Hero;
