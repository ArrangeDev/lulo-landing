import "../styles/custom.css";
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import React from "react";

type Props = {};

const Wall = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 md:px-40 py-8 pt-10 bg-split">
      <div className="flex md:flex-row flex-col items-center justify-between w-full h-full gap-6">
        <h1 className="text-4xl font-overused text-white">Wall of Love</h1>
        <p className="text-[#ECFCCB] text-md text-center md:text-left">
          Don&apos;t trust us yet? We get it. Hear from <br /> our customers
        </p>
      </div>
      <div className="flex flex-row justify-between items-start w-full h-full gap-4 md:px-0 px-6">
        <div className="md:flex md:flex-col md:items-center md:justify-start w-full gap-4 hidden">
          <ClientTweetCard id="1798912364789866919" className="bg-white" />
          <ClientTweetCard id="1802797194057236889" className="bg-white" />
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-4">
          <ClientTweetCard id="1802797194057236889" className="bg-white" />
          <ClientTweetCard id="1802797194057236889" className="bg-white" />
          <ClientTweetCard id="1802797194057236889" className="bg-white" />
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-start w-full gap-4 hidden">
          <ClientTweetCard id="1798912364789866919" className="bg-white" />
          <ClientTweetCard id="1802797194057236889" className="bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Wall;

//
