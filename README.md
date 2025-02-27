# Un micro projet pour découvrir et implémenter Tanstack Query avec react

## Pour Commencer

- clone le projet
- install les dépendances

Dans ce workshop, nous allons nous servir de l'API simpsons [Doc](https://www.postman.com/simpsons-team).

## Petit tour du propriétaire

:warning: Pour faciliter la mise en place d'un style minimaliste et rapide, un lien cdn Boostrap est mis dans le `index.html`.

- React router est mis en place et implémenté dans `main.tsx`
- Il y a deux pages enfants de `App.tsx`: `<Home/>`pour la racine et `<OneSimpsons />`pour l'uri "/simpsons/:id"
- Des composants fonctionnels sont déjà mis en place : `<SimpsonsCard />`, `<SimpsonsDetails />`et `<SideMenu />`
