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
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
