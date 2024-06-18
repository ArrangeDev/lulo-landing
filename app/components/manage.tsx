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
      <div className="flex md:flex-row flex-col justify-start gap-4 py-6">
        <Image
          src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/4ca2fc8e-3687-457f-9ab2-439b073a6f71"
          alt="lulo phone"
          height={500}
          width={500}
          className="pr-[40px]"
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-overused pt-5 text-5xl md:pr-16">
            The one place to manage your DeFi
          </h2>
          <p className="font-overused text-textgray md:pr-36 pr-4 md:text-lg text-xl">
            Lulo is the new way of earning interest from multiple providers automatically.
          </p>
          <ul className="timeline timeline-vertical md:-ml-[575px] -ml-80 ">
            <li>
              <div className="timeline-end timeline-box bg-transparent border-none box-shadow-">
                <p className="font-medium">Connect your wallet</p>
                <p className="text-textgray">Or use your wallet to get started</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-emerald" />
            </li>
            <li>
              <hr className="bg-emerald" />
              <div className="timeline-end timeline-box bg-transparent border-none">
                <p className="font-medium">Create a deposit</p>
                <p className="text-textgray">Start with as little as $100</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-emerald" />
            </li>
            <li>
              <hr className="bg-emerald" />
              <div className="timeline-end timeline-box bg-transparent border-none">
                <p className="font-medium">Relax & Earn</p>
                <p className="text-textgray hidden md:block">
                  We&apos;ll automatically invest your money <br /> in various DeFi pools with this
                </p>
                <p className="text-textgray md:hidden">
                  We&apos;ll automatically invest your money in various DeFi pools with this
                </p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Manage;
