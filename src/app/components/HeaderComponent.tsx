import { Indicator } from "./Indicator";

interface HeaderIndicator {
  label: string;
  value: number | string;
}

interface HeaderComponentProps {
  title: string;
  indicators: HeaderIndicator[];
}

export const HeaderComponent = ({
  title,
  indicators,
}: HeaderComponentProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>

      <div className="flex justify-center gap-4 flex-wrap max-w-6xl mx-auto">
        {indicators.map((indicator) => (
          <Indicator
            key={indicator.label}
            label={indicator.label}
            value={indicator.value}
          />
        ))}
      </div>
    </header>
  );
};
