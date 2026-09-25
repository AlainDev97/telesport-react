import { Link, useParams } from "react-router-dom";

import { HeaderComponent } from "../components/HeaderComponent";
import { MedalsEvolutionChart } from "../components/MedalsEvolutionChart";

import { useData } from "../hooks/useData";

import {
  calculateTotalMedals,
  calculateTotalAthletes,
  calculateTotalParticipations,
} from "../utils/olympicCalculations";

export const CountryDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useData();

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <p>Chargement des données...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <p role="alert">{error}</p>

        <Link to="/" className="text-blue-400 underline">
          Retour au Dashboard
        </Link>
      </main>
    );
  }

  const country = data.find((country) => country.id === Number(id));

  if (!country) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <p role="alert" className="mb-4">
          Le pays demandé est introuvable.
        </p>

        <Link to="/" className="text-blue-400 underline">
          Retour au Dashboard
        </Link>
      </main>
    );
  }

  const indicators = [
    {
      label: "Participations",
      value: calculateTotalParticipations(country),
    },
    {
      label: "Total médailles",
      value: calculateTotalMedals(country),
    },
    {
      label: "Total athlètes",
      value: calculateTotalAthletes(country),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 text-blue-400 underline
                     hover:text-blue-300 focus-visible:outline-2
                     focus-visible:outline-offset-4"
        >
          ← Retour au Dashboard
        </Link>

        <HeaderComponent title={country.country} indicators={indicators} />

        <MedalsEvolutionChart country={country} />

        <p className="text-sm text-gray-400 mt-4">
          Évolution des médailles obtenues par ce pays au fil des éditions des
          Jeux olympiques.
        </p>
      </div>
    </main>
  );
};
