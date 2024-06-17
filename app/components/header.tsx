import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between pl-[178px] pr-[178px] border-b-[1px] h-[44px]">
      <a href="/">
        <Image src="/lulo.png" alt="Lulo Logo" width={50} height={10} />
      </a>
      <div className="text-textgray flex flex-row items-center gap-4">
        <a href="/">Product</a>
        <a href="/">How it Works</a>
        <a href="/">FAQs</a>
      </div>
      <Link
        href="/"
        className={`${buttonVariants({ variant: "outline" })} bg-emerald text-white h-[32px]`}
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Header;
