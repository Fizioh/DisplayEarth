# React Vite config

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Resium & Cesium Configuration

If you're working on a project involving Cesium and Resium, here's how you can get started with the setup:

1. First, make sure to install Cesium and Resium using npm or yarn:

```bash
npm install --save cesium resium
npm install --save-dev vite-plugin-cesium
# OR
yarn add cesium resium
yarn add --dev vite-plugin-cesium
```

If you're using TypeScript, you no longer need @types/cesium since Resium now supports Cesium's official type definitions.

Next, you'll need to edit your vite.config.js file. You can use the following example as a guide:
```js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
  plugins: [react(), cesium()]
})
```

And that's it! Your Cesium and Resium setup is now configured.

For further details and installation instructions, you can check out the official Resium documentation: https://resium.reearth.io/installation
