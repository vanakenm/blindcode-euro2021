# Blind Code React Native - Corrigé Exercice Euro 2021

## Principe

- Dans App.js on trouve la liste des matches et un simple "map" pour créer les différents composants de type Match
- Le composant Match est dans un fichier séparé "Match.js"
- Celui ci doit être importé (ligne 4 de Match.js)

## Passer des propriétés

Passer des propriétés à un composant React (ou à une fonction) peut se faire de différentes manière - en voici trois:

### Chaque paramètre séparé:

C'est sans doute le plus naturel et ce que nous avons fait (en majorité) jusqu'ici:

- Chaque paramètre est passé de manière explicite au composants
- Dans le composants, ils sont tous accessible en clé de l'objet "Props"

```JavaScript
  // Dans App.js
  let match = {team1: "Belgique", score1:2, team2: "France", score2: 4}

  <Match team1={match.team1} score1={match.score1} team2={match.team2} score2={match.score2} />

  // Dans Match.js

  function Match(props) {
    let team1 = props.team1
    ...
  }
```

### Un seul paramètre "match":

Certains d'entre vous ont fonctionné différemment en passant un paramètre unique "match" avec les quatre propriétés dedans.

Dans Match.js, l'objet match est une propriété de props et a lui même quatre propriétés

```JavaScript
  // Dans App.js
  let match = {team1: "Belgique", score1:2, team2: "France", score2: 4}
  ...
  <Match match={match} />

  // Dans Match.js

  function Match(props) {
    let team1 = props.match.team1
    ...
  }
```

### Opérateur "...":

Une option moins évidente mais que vous pourriez rencontrer dans des exemples - utiliser l'opérateur "..." appellé "opérateur de décomposition" (voir [référence](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) - "spread operator" en anglais.

C'est ce que j'ai fais dans mon exemple.

Que fait cet opérateur ? A partir d'un objet avec plusieurs propriété il crée une variable par propriété - cela simplifie l'écriture:

```JavaScript
  let match = {team1: "Belgique", score1:2, team2: "France", score2: 4}
  // Dans App.js
  <Match {...match} />
```

## Fichiers séparés

Il est possible (et recommandé) d'écrire chaque composant dans un fichier distinct. Mon approche est de toujours commencer dans un seul fichier, puis d'extraire le composant quand il fonctionne - n'essayer jamais de transformer du code avant qu'il ne fonctionne (il vous sera impossible de savoir si l'erreur est celle initiale ou du à l'extraction).

Couper/coller simplement le composant dans un nouveau fichier avec le même nom que le composant (.js). Il faudra sans doute ajouter quelques imports (React, composants utilisés).

Il faut après l'importer correctement dans le fichier initial.

Ceci est totalement équivalent à:

```JavaScript
  let match = {team1: "Belgique", score1:2, team2: "France", score2: 4}
  // Dans App.js
  <Match team1={match.team1} score1={match.score1} team2={match.team2} score2={match.score2} />
```

C'est à la fois plus court et potentiellement plus opaque donc à utiliser avec précaution