import { Separator } from "@/components/ui/separator";
import React from "react";
import Contractbutton from "./contractbutton";
import FlipText from "@/components/magicui/flip-text";
import Link from "next/link";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

type Props = {};

const Manage = (props: Props) => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-start md:px-60 px-5">
      <div className="flex md:flex-row flex-col justify-between w-full pb-12 pt-8 gap-4">
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
        <div className="flex flex-row items-center justify-center md:gap-8 gap-8 font-overused pt-8 md:pt-0 text-textgray">
          <div className="">
            <FlipText className="md:text-5xl shrink text-4xl text-emerald" word="12.3%" />
            <p>Average APY</p>
          </div>
          <div>
            <FlipText className="md:text-5xl shrink text-4xl text-emerald" word="2x" />
            <p>Earnings</p>
          </div>
          <div>
            <FlipText className="md:text-5xl shrink text-4xl text-emerald" word="$191M" />
            <p>Total Earnings</p>
          </div>
        </div>
      </div>
      <Separator className="hidden md:block" />
      <div className="flex md:flex-row flex-col justify-start gap-4 py-6">
        <Image
          src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/4ca2fc8e-3687-457f-9ab2-439b073a6f71"
          alt="lulo phone"
          height={500}
          width={380}
          className="pr-[40px] shrink-0 max-w-full h-auto"
          style={{ objectFit: "contain" }}
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-overused pt-5 text-5xl md:pr-8">The one place to manage your DeFi</h2>
          <p className="font-overused text-textgray md:pr-36 pr-4 md:text-lg text-xl">
            Lulo is the new way of earning interest from multiple providers automatically.
          </p>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-emerald" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-lg">
                <p className="font-medium">Connect your wallet</p>
                <p className="text-textgray">Or use your email to get started</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-emerald" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-lg">
                <p className="font-medium">Create a deposit</p>
                <p className="text-textgray">Start with as little as $100</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-emerald" />
              </TimelineSeparator>
              <TimelineContent className="text-lg">
                <p className="font-medium">Relax & Earn</p>
                <p className="text-textgray hidden md:block">
                  We&apos;ll automatically invest your money in
                  <br /> various DeFi pools with this
                </p>
                <p className="text-textgray md:hidden">
                  We&apos;ll automatically invest your money in various DeFi pools with this
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Manage;
