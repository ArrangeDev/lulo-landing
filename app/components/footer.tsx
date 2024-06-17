import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandSpotify } from "@tabler/icons-react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white flex flex-col justify-start gap-4 md:px-40 px-8 pt-16 pb-16">
      <Separator />
      <div className="flex md:flex-row flex-col justify-center items-center gap-12 md:gap-32 pt-4">
        <div className="flex flex-col gap-3">
          <Image src="/lulo.svg" alt="Lulo Logo" width={140} height={28} />
          <p className="text-[#6B7280]">
            Lulo helps you automate the painful process <br /> of manually switching providers to
            maximise <br /> your DeFi yields.
          </p>
          <div className="flex flex-row gap-5">
            <a href="/">
              <IconBrandFacebook stroke={2} className="text-[#6B7280]" />
            </a>
            <a href="/">
              <IconBrandTwitter stroke={2} className="text-[#6B7280]" />
            </a>
            <a href="/">
              <IconBrandInstagram stroke={2} className="text-[#6B7280]" />
            </a>
            <a href="/">
              <IconBrandLinkedin stroke={2} className="text-[#6B7280]" />
            </a>
            <a href="/">
              <IconBrandYoutube stroke={2} className="text-[#6B7280]" />
            </a>
            <a href="/">
              <IconBrandSpotify stroke={2} className="text-[#6B7280]" />
            </a>
          </div>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-2 md:justify-center md:gap-20">
          <div className="flex flex-col gap-2 text-[#6B7280]">
            <p className="font-bold pb-3 text-[#111827]">Get Started</p>
            <a href="/">Documentation</a>
            <a href="/">Rewards</a>
            <a href="/">Portfolio</a>
            <a href="/">Login</a>
          </div>
          <div className="flex flex-col gap-2 text-[#6B7280]">
            <p className="font-bold pb-3 text-[#111827]">Solutions</p>
            <a href="/">About</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Disclaimer</a>
          </div>
          <div className="flex flex-col gap-2 text-[#6B7280] pt-6 md:pt-0">
            <p className="font-bold pb-3 text-[#111827]">Resources</p>
            <a href="/">Blog</a>
            <a href="/">Docs</a>
            <a href="/">
              Product Adoption <br /> School
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
