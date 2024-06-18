import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between px-4 md:px-[178px] border-b-[1px] h-[44px]">
      <div className="flex flex-row items-center justify-between gap-1">
        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="hover:cursor-pointer drawer-button">
              ≡
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#065F46]">
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">How it Works</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/" className="-m-4 md:-m-0">
          <Image
            src="/lulo.png"
            alt="Lulo Logo"
            width={70}
            height={14}
            className="hover:sepia drop-shadow-2xl"
          />
        </Link>
      </div>

      <div className="text-textgray hidden md:flex flex-row items-center gap-8 shrink">
        <Link href="/" className="hover:text-emerald">
          Product
        </Link>
        <Link href="/" className="hover:text-emerald">
          How it Works
        </Link>
        <Link href="/" className="hover:text-emerald">
          FAQs
        </Link>
      </div>
      <Link
        href="/"
        className={`${buttonVariants({
          variant: "outline",
        })} bg-emerald text-white h-[32px] hover:bg-white hover:text-emerald hover:animate-pulse`}
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Header;
