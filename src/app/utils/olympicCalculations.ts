import type { Olympic } from "../models/Olympic";

// Calcule le nombre total de médailles obtenues par un pays.
export const calculateTotalMedals = (country: Olympic): number => {
  return country.participations.reduce(
    (total, participation) => total + participation.medalsCount,
    0,
  );
};

// Calcule le nombre total d'athlètes d'un pays.
export const calculateTotalAthletes = (country: Olympic): number => {
  return country.participations.reduce(
    (total, participation) => total + participation.athleteCount,
    0,
  );
};

// Calcule le nombre de participations d'un pays aux Jeux olympiques.
export const calculateTotalParticipations = (country: Olympic): number => {
  return country.participations.length;
};

// Calcule le nombre d'éditions distinctes des Jeux olympiques.
export const calculateTotalGamesEditions = (countries: Olympic[]): number => {
  const years = countries.flatMap((country) =>
    country.participations.map((participation) => participation.year),
  );

  return new Set(years).size;
};
