# Un micro projet pour découvrir et implémenter Tanstack Query avec react

## 1. Pour Commencer

### 1.1 Tanstack query

💡 Pourquoi TanStack Query est meilleur qu'un refetch manuel ?
| Critère | Refetch classique (useEffect + fetch) | TanStack Query |
|--- |--- |--- |
| 🔁 Évite les requêtes inutiles | ❌ Chaque composant refait un fetch indépendant | ✅ Mutualise les requêtes identiques
| ⏳ Gestion du cache | ❌ Doit être codée à la main | ✅ Automatique avec staleTime et cacheTime
| 🔄 Mises à jour après mutation | ❌ Nécessite un useEffect supplémentaire | ✅ Automatique avec invalidateQueries
| 📡 Refetch en arrière-plan | ❌ Bloque souvent l’affichage | ✅ Récupération fluide sans blocage
| 📶 Mode offline + revalidation auto | ❌ Doit être géré manuellement | ✅ Prise en charge native

🔹 En résumé : TanStack Query simplifie la gestion des requêtes en évitant les appels inutiles, en optimisant le cache et en rendant l’expérience utilisateur plus fluide. 🚀

### 1.2 Lancement du projet

- clone le projet
- install les dépendances

Dans ce workshop, nous allons nous servir de l'API simpsons [Doc](https://www.postman.com/simpsons-team).

## Petit tour du propriétaire

:warning: Pour faciliter la mise en place d'un style minimaliste et rapide, un lien cdn Boostrap est mis dans le `index.html`.

- React router est mis en place et implémenté dans `main.tsx`
- Il y a deux pages enfants de `App.tsx`: `<Home/>`pour la racine et `<OneSimpsons />`pour l'uri "/simpsons/:id"
- Des composants fonctionnels sont déjà mis en place : `<SimpsonsCard />`, `<SimpsonsDetails />`et `<SideMenu />`

##Pou
