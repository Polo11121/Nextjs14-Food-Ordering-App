import { SectionHeaders } from "@/components/ui";

export const AboutUs = () => (
  <section>
    <SectionHeaders
      header="Our Story"
      subHeader="About us"
      className="mt-16 mb-4"
    />
    <div className="text-gray-500 max-w-2xl mx-auto text-center flex flex-col gap-y-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        quisquam perspiciatis illum sit nemo, alias libero culpa enim odit!
        Molestias mollitia perspiciatis tempore dolor totam assumenda amet natus
        iure laborum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        quisquam perspiciatis illum sit nemo, alias libero culpa enim odit!
        Molestias mollitia perspiciatis tempore dolor totam assumenda amet natus
        iure laborum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        quisquam perspiciatis illum sit nemo.
      </p>
    </div>
  </section>
);
