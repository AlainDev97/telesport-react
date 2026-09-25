# Notes d'architecture – TéléSport

## 1. Problèmes identifiés

### 1.1 Utilisation du type `any`

**Fichier concerné :** `App.tsx`

Le type `any` est utilisé à plusieurs endroits dans le code. Il désactive les vérifications de TypeScript, ce qui augmente le risque d'erreurs et rend le code moins maintenable.

**Amélioration envisagée :** remplacer les `any` par des interfaces TypeScript (`Olympic` et `Participation`).

### 1.2 Fichier `App.tsx` trop volumineux

**Fichier concerné :** `App.tsx`

Le fichier `App.tsx` contient plusieurs composants, les données, les calculs et le routage. Cela rend le code difficile à lire et à maintenir.

**Amélioration envisagée :** séparer les responsabilités dans des fichiers distincts.

### 1.3 Données codées en dur dans `App.tsx`

**Fichier concerné :** `App.tsx`

Les données des Jeux olympiques sont directement déclarées dans `App.tsx`, ce qui mélange les données et la logique d'affichage.

**Amélioration envisagée :** séparer les données du composant et centraliser leur récupération dans le hook `useData`.

### 1.4 Duplication du code

**Fichier concerné :** `App.tsx`

Les composants `Home` et `Country` contiennent des cartes statistiques avec une structure HTML et des styles similaires, ce qui entraîne une duplication du code.

**Amélioration envisagée :** créer un composant réutilisable `HeaderComponent` pour éviter cette duplication.

### 1.5 Mauvaise gestion des effets secondaires (`useEffect`)

**Fichier concerné :** `App.tsx`

Le composant `Home` utilise un `useEffect` avec un `setTimeout` sans fonction de nettoyage, ce qui peut entraîner des exécutions multiples en mode développement.

**Amélioration envisagée :** centraliser la logique de chargement dans le hook `useData` et prévoir un nettoyage de l'effet.

### 1.6 Logique métier dans les composants

**Fichier concerné :** `App.tsx`

Les calculs des médailles et des athlètes sont directement effectués dans les composants `Home` et `Country`, ce qui mélange la logique métier et l'affichage.

**Amélioration envisagée :** extraire les calculs dans des fonctions réutilisables afin de séparer la logique métier de l'interface.

### 1.7 Gestion incomplète des états

**Fichier concerné :** `App.tsx`

Le composant `Home` gère uniquement l'état de chargement. Aucun état spécifique n'est prévu pour les erreurs ou l'absence de données.

**Amélioration envisagée :** mettre en place une gestion des états `loading`, `error` et `empty` afin d'informer correctement l'utilisateur.

### 1.8 Navigation incomplète

**Fichier concerné :** `App.tsx`

La route `/country/:id` n'est pas déclarée et le graphique du Dashboard ne permet pas de naviguer vers la page détaillée d'un pays.

**Amélioration envisagée :** ajouter la route dynamique et permettre la navigation vers la page de détail en cliquant sur un pays.

### 1.9 Absence de vérification des identifiants

**Fichier concerné :** `App.tsx`

Le composant `Country` ne vérifie pas si le pays demandé existe. Un identifiant invalide peut donc provoquer une erreur JavaScript.

**Amélioration envisagée :** vérifier l'existence du pays avant d'afficher ses données et prévoir un message d'erreur adapté.

### 1.10 Valeurs codées en dur

**Fichier concerné :** `App.tsx`

Le nombre d'éditions des Jeux olympiques est fixé à `5`. Cette valeur ne sera pas automatiquement mise à jour si les données évoluent.

**Amélioration envisagée :** calculer dynamiquement le nombre d'éditions à partir des données disponibles.

### 1.11 Présence de console.log

**Fichier concerné :** `App.tsx`

Plusieurs `console.log` sont présents dans le code pour afficher des informations de débogage, ce qui encombre inutilement la console du navigateur.

**Amélioration envisagée :** supprimer les `console.log` inutiles.

### 1.12 Catégorisation des problèmes

Les problèmes identifiés peuvent être regroupés par catégories afin de mieux comprendre leur nature.

| Catégorie                            | Problèmes concernés                                       |
| ------------------------------------ | --------------------------------------------------------- |
| **Typage**                           | 1.1 Utilisation du type `any`                             |
| **Structure / architecture**         | 1.2 Fichier `App.tsx` trop volumineux                     |
| **Gestion et placement des données** | 1.3 Données codées en dur dans `App.tsx`                  |
| **Duplication**                      | 1.4 Duplication du code                                   |
| **Gestion des effets React**         | 1.5 Mauvaise gestion des effets secondaires (`useEffect`) |
| **Séparation des responsabilités**   | 1.6 Logique métier dans les composants                    |
| **Gestion des états**                | 1.7 Gestion incomplète des états                          |
| **Navigation**                       | 1.8 Navigation incomplète                                 |
| **Robustesse**                       | 1.9 Absence de vérification des identifiants              |
| **Maintenabilité**                   | 1.10 Valeurs codées en dur                                |
| **Nettoyage du code**                | 1.11 Présence de `console.log`                            |

Cette catégorisation montre que les principaux problèmes du starter code concernent la séparation des responsabilités, la maintenabilité, le typage et l'organisation générale de l'application.

### 1.13 Priorisation des problèmes

Les problèmes identifiés n'ont pas tous le même impact sur la maintenabilité et la fiabilité de l'application.

#### Priorité haute

- **1.1 Utilisation du type `any`** : réduit fortement la sécurité apportée par TypeScript.
- **1.2 Fichier `App.tsx` trop volumineux** : concentre trop de responsabilités et complique la maintenance.
- **1.3 Données codées en dur dans `App.tsx`** : mélange les données et l'interface, et complique une future connexion à une API.
- **1.5 Mauvaise gestion des effets secondaires** : peut provoquer des comportements inattendus.
- **1.7 Gestion incomplète des états** : ne permet pas de gérer correctement les cas de chargement, d'erreur ou d'absence de données.
- **1.9 Absence de vérification des identifiants** : peut provoquer une erreur lors de l'accès à un pays inexistant.

#### Priorité moyenne

- **1.4 Duplication du code** : augmente le risque d'incohérences lors des modifications.
- **1.6 Logique métier dans les composants** : rend les composants plus difficiles à lire, réutiliser et tester.
- **1.8 Navigation incomplète** : empêche l'accès normal à certaines fonctionnalités prévues.

#### Priorité basse

- **1.10 Valeurs codées en dur** : limite l'adaptation automatique de l'application lorsque les données évoluent.
- **1.11 Présence de `console.log`** : n'empêche pas le fonctionnement de l'application, mais doit être nettoyée avant livraison.

Cette priorisation permet de traiter en premier les problèmes pouvant provoquer des erreurs ou ayant le plus fort impact sur l'architecture et la maintenabilité du projet.

## 2. Proposition d'une nouvelle architecture

### 2.1 Nouvelle structure du projet

L'application actuelle concentre plusieurs responsabilités dans le fichier
App.tsx, ce qui rend le code difficile à lire et à maintenir.

Je propose de séparer les pages, les composants réutilisables, les hooks,
les modèles TypeScript et les données simulées.

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
│   └── App.tsx
│
├── index.css
└── main.tsx
```

### 2.2 Justification des choix

- **Pages :** les composants DashboardPage et CountryDetailPage
  récupèrent les données et gèrent la logique propre à chaque page.

- **Components :** les composants réutilisables reçoivent leurs données
  via des props et se concentrent sur l'affichage.

- **Hooks :** le hook useData centralise l'accès aux données ainsi que
  les états de chargement et d'erreur.

- **Models :** les interfaces Olympic et Participation permettent
  de typer les données et de remplacer les types any.

- **Data :** les données simulées sont séparées des composants React.

- **Utils :** les fonctions de calcul des statistiques sont
  réutilisables et indépendantes de l'interface.

Cette organisation permet de séparer les responsabilités, de limiter
la duplication du code et de faciliter sa maintenance.

Elle prépare également l'intégration future d'une API REST : les pages
continueront d'utiliser le hook useData, tandis que la récupération
des données pourra évoluer sans modifier les composants d'affichage.

### 2.3 Circulation des données

Les pages `DashboardPage` et `CountryDetailPage` utiliseront le hook
`useData` pour récupérer les données nécessaires.

Les données seront ensuite transmises aux composants de présentation
via des props.

```text
Données simulées (JSON)
         |
         v
      useData
         |
         v
DashboardPage / CountryDetailPage
         |
         v
Composants réutilisables
(HeaderComponent, graphiques...)
```

Cette séparation permet aux composants de présentation de se concentrer
uniquement sur l'affichage, sans gérer directement la récupération des données.

### 2.4 Préparation à une future API REST

La récupération des données est centralisée dans le hook `useData`.

Actuellement, les données proviennent de fichiers JSON simulés.
À l'avenir, elles pourront être récupérées depuis une API REST.

Cette organisation permettra de modifier la source des données
sans avoir à modifier les composants de présentation.
