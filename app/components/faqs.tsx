import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

const Faqs = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-around w-full gap-6 pb-12">
      <Separator />
      <h1 className="text-overused font-medium text-3xl">Frequently Asked</h1>
      <div className="pb-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How much money do I need to start?</AccordionTrigger>
            <AccordionContent>
              Lulo is the new way of earning interest from multiple providers automatically.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are the contracts trusted?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why is this better than my bank?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What&apos;s the refund policy?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>I don&apos;t have crypto, can I still invest?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-emerald text-white rounded-xl p-4 flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-overused text-4xl pt-8">Get Started Now</h1>
        <p className="text-sm px-16">
          Lulo helps you automate the painful process of manually <br /> switching providers to
          maximise your DeFi yields.
        </p>
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "outline",
          })} bg-white text-emerald h-[32px] hover:bg-emerald hover:text-white hover:animate-pulse`}
        >
          Get Started
        </Link>
        <RetroGrid />
      </div>
    </div>
  );
};

export default Faqs;
