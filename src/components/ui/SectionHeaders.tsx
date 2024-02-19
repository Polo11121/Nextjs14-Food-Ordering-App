type SectionHeadersProps = {
  header: string;
  subHeader: string;
  className?: string;
};

export const SectionHeaders = ({
  header,
  subHeader,
  className,
}: SectionHeadersProps) => (
  <div className={`text-center${className ? ` ${className}` : ""}`}>
    <h3 className="uppercase text-gray-500 font-semibold leading-4">
      {header}
    </h3>
    <h3 className="text-primary font-bold text-4xl italic capitalize">
      {subHeader}
    </h3>
  </div>
);
