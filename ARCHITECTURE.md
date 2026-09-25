# Architecture – TéléSport

## 1. Structure du projet

```text
src/
│
├── app/
│   ├── components/
│   │   ├── HeaderComponent.tsx
│   │   ├── Indicator.tsx
│   │   ├── MedalsPieChart.tsx
│   │   └── MedalsEvolutionChart.tsx
│   │
│   ├── pages/
            NotFound.tsx
│   │   ├── DashboardPage.tsx
│   │   └── CountryDetailPage.tsx
│   │
│   ├── hooks/
│   │   └── useData.ts
│   │
│   ├── models/
│   │   ├── Olympic.ts
│   │   └── Participation.ts
│   │
│   ├── data/
│   │   └── olympics.json
│   │
│   ├── utils/
│   │   └── olympicCalculations.ts
│   │
│   └── config/
│       └── chart.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## 2. Pages

### DashboardPage

`DashboardPage` est un composant dit "smart".

Il récupère les données avec le hook `useData`, gère les états de chargement et d'erreur, puis transmet les données aux composants de présentation.

Il affiche notamment :

- les indicateurs du Dashboard ;
- le graphique des médailles par pays.

### CountryDetailPage

`CountryDetailPage` est également un composant "smart".

Il récupère l'identifiant du pays depuis l'URL, utilise `useData` pour accéder aux données et prépare les informations nécessaires à l'affichage.

Il affiche :

- le nombre de participations ;
- le total des médailles ;
- le total des athlètes ;
- l'évolution des médailles du pays.

## 3. Composants réutilisables

Les composants du dossier `components` sont principalement des composants de présentation, dits "dumb".

### HeaderComponent

Affiche le titre d'une page et une liste d'indicateurs.

### Indicator

Affiche un indicateur composé d'un libellé et d'une valeur.

### MedalsPieChart

Affiche le graphique représentant le total des médailles par pays.

### MedalsEvolutionChart

Affiche l'évolution du nombre de médailles d'un pays au fil des éditions des Jeux olympiques.

## 4. Gestion des données

Le hook personnalisé `useData` centralise l'accès aux données de l'application.

Actuellement, les données proviennent du fichier `olympics.json`.

Le hook gère également les états :

- `data` ;
- `loading` ;
- `error`.

Les pages n'accèdent donc pas directement au fichier JSON.

## 5. Modèles TypeScript

Les interfaces `Olympic` et `Participation` décrivent la structure des données utilisées dans l'application.

Elles permettent d'éviter l'utilisation du type `any` et de bénéficier des vérifications de TypeScript.

## 6. Fonctions utilitaires

Le fichier `olympicCalculations.ts` contient les calculs réutilisables, comme :

- le total des médailles ;
- le total des athlètes ;
- le nombre de participations ;
- le nombre d'éditions des Jeux olympiques.

Cela permet de séparer la logique métier de l'affichage.

## 7. Configuration des graphiques

Le fichier `chart.ts` centralise l'enregistrement des éléments nécessaires à Chart.js.

Il permet d'éviter de répéter la configuration des graphiques dans plusieurs composants.

## 8. Préparation à une future API

L'accès aux données étant centralisé dans `useData`, la source des données pourra évoluer sans modifier les composants de présentation.

Actuellement :

```text
olympics.json
     ↓
   useData
     ↓
    Pages
     ↓
 Composants
```

À l'avenir :

```text
API REST
   ↓
 useData
   ↓
  Pages
   ↓
Composants
```

Cette organisation facilite l'intégration future d'un back-end tout en conservant une séparation claire des responsabilités.
