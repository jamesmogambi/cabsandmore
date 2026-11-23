import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/data/faq";
import SectionHeading from "./SectionHeading";

const FAQ = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1140px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Support"
            title="Frequently asked questions"
            description="Everything you need to know about Cabs&More. Can't find an answer? Our team is happy to help."
          />

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#26C165]">
              <MessageCircle className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[18px] font-bold text-[#111827]">
              Still have questions?
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#6b7280]">
              Our support team is available 7 days a week in English and
              Swahili.
            </p>
            <Link
              href="/contact-us"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#26C165] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]"
            >
              Contact support
            </Link>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-neutral-200"
            >
              <AccordionTrigger className="py-5 text-left text-[16px] font-semibold text-[#111827] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[#6b7280]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;