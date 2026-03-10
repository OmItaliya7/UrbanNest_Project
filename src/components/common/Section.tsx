import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
}


const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  );
};

export default Section;