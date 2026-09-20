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
