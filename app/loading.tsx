"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Image src="/public/lulo.svg" alt="Lulo" width={100} height={2000} className="animate-spin" />
    </div>
  );
};

export default Loading;
