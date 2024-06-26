"use client";

import Image from "next/image";
import React, { useState } from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { luloInterest, bankInterest } from "@/utils/interest";
import { LineChart } from "@mui/x-charts/LineChart";

type Props = {};

const Goodbye = (props: Props) => {
  const [deposit, setDeposit] = React.useState(100);

  const handleSliderChange = (value: number[]) => {
    setDeposit(value[0]);
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-start gap-6 md:gap-12 md:px-36 px-4 md:pb-12 pb-4 pt-4">
      <div className="md:pl-6 flex flex-col justify-start gap-4">
        <h1 className="font-overused text-5xl">
          Say goodbye <br /> to your bank
        </h1>
        <p className="font-overused text-textgray md:text-xl">
          Lulo is the new way of earning interest <br /> from multiple providers automatically.
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="font-overused text-lg">Initial Deposit</h2>
          <p className="border-2 rounded-md border-textgray p-2 mb-2">${deposit}</p>
          <RadixSlider.Root
            className="relative flex items-center w-full touch-none select-none"
            defaultValue={[deposit]}
            min={100}
            max={10000}
            step={100}
            onValueChange={handleSliderChange}
            aria-label="Initial Deposit Slider"
          >
            <RadixSlider.Track className="bg-gray-300 relative grow rounded-full h-1">
              <RadixSlider.Range className="absolute bg-emerald rounded-full h-full" />
            </RadixSlider.Track>
            <RadixSlider.Thumb className="block w-5 h-5 bg-emerald rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </RadixSlider.Root>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-4 bg-lime-200 bg-upward-offset p-8 rounded-xl">
        <div className="flex md:flex-row flex-col bg-white p-4 rounded-xl items-center gap-4 shrink-0">
          <div className="flex flex-col gap-2 px-4 md:items-start items-center">
            <p className="text-2xl font-semibold">${luloInterest(deposit).roundedTotalAmount}</p>
            <Image src="/lulo.png" alt="" width={50} height={10} />
          </div>
          <div className="rounded-full border-textgray border-2 p-2 px-6">vs</div>
          <div className="flex flex-col px-4 md:-mr-5 md:items-start items-center gap-1">
            <p className="text-2xl font-semibold">${bankInterest(deposit).roundedTotalAmount}</p>
            <p>🏦 Your Bank</p>
          </div>
        </div>
        <div className="bg-white rounded-xl hidden md:block">
          <LineChart
            xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                curve: "linear",
                data: luloInterest(deposit).amounts,
                showMark: false,
              },
              { curve: "linear", data: bankInterest(deposit).amounts, showMark: false },
            ]}
            width={500}
            height={300}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
        <div className="bg-white rounded-xl md:hidden">
          <LineChart
            xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                curve: "linear",
                data: luloInterest(deposit).amounts,
                showMark: false,
              },
              { curve: "linear", data: bankInterest(deposit).amounts, showMark: false },
            ]}
            width={300}
            height={180}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Goodbye;
