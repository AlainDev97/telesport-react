# TéléSport – Jeux Olympiques

Application React permettant de consulter les performances de plusieurs pays aux Jeux Olympiques.

Le projet propose un dashboard avec les statistiques globales et un graphique des médailles, ainsi qu'une page de détail pour chaque pays avec ses indicateurs principaux et l'évolution de ses performances au fil des différentes éditions.

---

## Fonctionnalités

- Affichage du nombre de pays participants
- Affichage du nombre d'éditions des Jeux Olympiques
- Graphique circulaire représentant le total de médailles par pays
- Navigation vers la page détail d'un pays depuis le graphique
- Affichage des informations détaillées d'un pays :
  - nombre de participations
  - nombre total de médailles
  - nombre total d'athlètes
- Graphique d'évolution des médailles par édition
- Navigation entre le Dashboard et les pages de détail
- Gestion des identifiants de pays invalides
- Page 404 pour les routes inconnues
- Gestion des états de chargement et d'erreur
- Interface responsive sur desktop, tablette et mobile

---

## Stack technique

- React
- TypeScript
- Vite
- React Router
- Chart.js
- react-chartjs-2
- Tailwind CSS

---

## Prérequis

Avant de lancer le projet, vous devez disposer de :

- Node.js
- npm

---

## Installation

Cloner le dépôt :

```bash
git clone <URL_DU_REPOSITORY>
```

Se placer dans le dossier du projet :

```bash
cd DFSJS-D-finissez-et-d-veloppez-le-front-end-en-utilisant-du-code-React-maintenable
```

Installer les dépendances :

```bash
npm install
```

---

## Lancement en développement

Pour lancer l'application :

```bash
npm run dev
```

Vite affichera ensuite l'adresse locale permettant d'accéder à l'application.

Exemple :

```text
http://localhost:5173
```

---

## Build de production

Pour vérifier que l'application compile correctement :

```bash
npm run build
```

Cette commande lance la vérification TypeScript puis génère le build de production avec Vite.

---

## Structure du projet

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
│   │   ├── DashboardPage.tsx
│   │   ├── CountryDetailPage.tsx
│   │   └── NotFound.tsx
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

---

## Architecture

L'application suit une séparation claire des responsabilités.

### Pages

Les pages sont les composants principaux de l'application.

Elles récupèrent les données grâce au hook `useData` et transmettent les informations nécessaires aux composants de présentation.

Principales pages :

- `DashboardPage`
- `CountryDetailPage`
- `NotFound`

### Components

Les composants du dossier `components` sont principalement responsables de l'affichage.

Ils reçoivent leurs données via des props et ne récupèrent pas directement les données de l'application.

Exemples :

- `HeaderComponent`
- `Indicator`
- `MedalsPieChart`
- `MedalsEvolutionChart`

### Hooks

Le hook `useData` centralise l'accès aux données.

Il permet également de gérer les états :

- `data`
- `loading`
- `error`

Les pages n'accèdent donc pas directement au fichier JSON.

### Models

Les interfaces TypeScript permettent de typer les données utilisées dans l'application :

- `Olympic`
- `Participation`

Cela permet d'éviter l'utilisation du type `any`.

### Utils

Le fichier `olympicCalculations.ts` contient les fonctions de calcul réutilisables :

- calcul du total des médailles
- calcul du total des athlètes
- calcul du nombre de participations
- calcul du nombre d'éditions des Jeux Olympiques

---

## Gestion des données

Les données sont actuellement simulées grâce au fichier :

```text
src/app/data/olympics.json
```

Le hook `useData` constitue le point d'accès unique à ces données.

Le flux actuel est :

```text
olympics.json
     ↓
   useData
     ↓
    Pages
     ↓
 Composants
```

Cette architecture permet de remplacer facilement les données simulées par une API REST dans une future version de l'application.

---

## Navigation

L'application utilise React Router.

Routes principales :

```text
/
```

Affiche le Dashboard.

```text
/country/:id
```

Affiche les informations détaillées du pays correspondant à l'identifiant.

Les routes inconnues affichent une page 404.

---

## Gestion des erreurs

L'application gère plusieurs situations :

- état de chargement
- erreur lors du chargement des données
- absence de données
- identifiant de pays invalide
- URL inconnue

L'objectif est d'éviter qu'un utilisateur arrive sur une page vide ou sur un message technique incompréhensible.

---

## Responsive

L'interface a été adaptée pour fonctionner sur :

- desktop
- tablette
- mobile

La mise en page utilise principalement les utilitaires `flex`, `grid` et les breakpoints responsive de Tailwind CSS.

Les indicateurs et graphiques s'adaptent à la largeur disponible.

---

## Documentation complémentaire

Deux fichiers complémentaires décrivent les choix réalisés pendant le projet :

```text
notes-architecture.md
```

Contient l'analyse du starter code, les problèmes identifiés, leur catégorisation et leur priorisation.

```text
ARCHITECTURE.md
```

Présente l'architecture finale de l'application et les responsabilités des différents dossiers et composants.

---

## Captures d'écran

Les captures d'écran du projet peuvent être placées dans un dossier :

```text
docs/screenshots/
```

Par exemple :

```text
docs/screenshots/dashboard-desktop.png
docs/screenshots/dashboard-mobile.png
docs/screenshots/country-desktop.png
docs/screenshots/country-mobile.png
```

Elles permettent de présenter le rendu de l'application sur plusieurs tailles d'écran.

---

## Choix techniques

Plusieurs choix ont été faits afin d'améliorer la maintenabilité du starter code :

- séparation des pages et composants réutilisables
- centralisation des données dans un Custom Hook
- utilisation d'interfaces TypeScript
- suppression des types `any`
- extraction des fonctions de calcul
- centralisation de la configuration Chart.js
- mise en place de React Router
- gestion des erreurs de navigation
- adaptation responsive avec Tailwind CSS

---

## Auteur

Projet réalisé dans le cadre de la formation Lead Developer JavaScript OpenClassrooms.
