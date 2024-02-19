import { SectionHeaders } from "@/components/ui";
import Link from "next/link";

export const ContactUs = () => (
  <section className="flex flex-col items-center my-8 gap-y-8">
    <SectionHeaders header="Don't hesitate" subHeader="Contact us" />
    <Link
      className="text-4xl font-semibold underline text-gray-500 hover:text-primary transition-all"
      href="tel:+1234567890"
    >
      +1 123 456 7890
    </Link>
  </section>
);
