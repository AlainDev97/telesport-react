import { HeaderComponent } from "../components/HeaderComponent";
import { MedalsPieChart } from "../components/MedalsPieChart";

import { useData } from "../hooks/useData";

import { calculateTotalGamesEditions } from "../utils/olympicCalculations";

export const DashboardPage = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <p>Chargement des données...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <p role="alert">{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <p>Aucune donnée disponible.</p>
      </div>
    );
  }

  const indicators = [
    {
      label: "Pays participants",
      value: data.length,
    },
    {
      label: "Éditions des JO",
      value: calculateTotalGamesEditions(data),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <HeaderComponent
            title="Historique des Jeux Olympiques - TéléSport"
            indicators={indicators}
          />

          <p className="text-lg mb-8">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        <MedalsPieChart countries={data} />

        <p className="text-sm text-gray-400 mt-4">
          Cliquez sur un pays pour voir ses détails.
        </p>
      </div>
    </main>
  );
};
