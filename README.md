# countries

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Processus de recherche

J'ai d'abord regardé le fonctionnement de l'API, trouvé les éléments à afficher, puis j'ai mis en place le fichier /countriesService.js qui me permet de faire les appels à l'API. J'ai stocké l'url de l'API dans un fichier .env.

Ensuite j'ai créé le store qui me permet d'appeler ce service et de stocker les éléments dans des variables.

Puis j'ai mis en place la maquette et j'ai lié le store aux éléments html.