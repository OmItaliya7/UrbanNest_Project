type SectionTitleProps = {
  title: string;
  highlight: string;
  subtitle?: string;
}

const SectionTitle = ({ title, highlight, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">

      <h2 className="section-title">
        {title}{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          {highlight}
        </span>
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;