import "../styles/custom.css";
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import React from "react";
import Image from "next/image";

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
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 md:px-12 pt-2">
        <p className="font-overused text-textgray">BACKED BY</p>
        <div
          className="md:flex md:flex-row md:items-center md:justify-around md:gap-12
                grid grid-cols-2 gap-6 
        "
        >
          <Image
            src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/91ade4b9-818a-4ba8-9884-86fa05269d9a"
            alt="Volt Capital"
            width={150}
            height={22.5}
            className="md:p-0 p-2"
          />
          <Image
            src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/b197b8f8-14a7-48fc-8b19-fee372eb7d81"
            alt="Parafi Capital"
            width={150}
            height={22.5}
            className="md:p-0 p-2"
          />
          <Image
            src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/b36d6521-c922-4140-9540-6e84631b9dd7"
            alt="Circle"
            width={150}
            height={22.5}
            className="md:p-0 p-2"
          />
          <Image
            src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/e6e82ae3-a529-4488-a5d5-64fc3a9fe6ec"
            alt="Castle Island Ventures"
            width={150}
            height={22.5}
            className="md:p-0 p-2"
          />
          <Image
            src="https://github.com/ArrangeDev/lulo-landing/assets/93305952/14e3d11d-2926-4b0a-bc7e-de2aad669552"
            alt="Solana Ventures"
            width={150}
            height={22.5}
            className="md:p-0 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Wall;

//
