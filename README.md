# 🚀 Template React Native ATTO - Abril 2021

[![React Native](https://img.shields.io/badge/React%20Native-v0.63.4-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v5.8.10-blue.svg)](https://reactnavigation.org/)

Template React Native é um ponto de partida para os projetos ATTO em React Native. Este projeta está configurado com redux, redux saga e redux persist. Também usa a ultima versão do react-navigation (v5)


## Features

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) with [Authentication flow](https://reactnavigation.org/docs/auth-flow) baked in.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Reselect](https://github.com/reduxjs/reselect)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisitos

- [Node](https://nodejs.org) v12 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)

## Estrutura do Projeto

- `/src` - Contém todo nosso código React Native
  - `/components` - componentes compartilhados por todo o projeto
  - `/config` - Configurações universais
  - `/constants` - variáveis constantes
  - `/locales` - internacionalização
    - `/translations` - arquivos JSON com os textos em cada idioma
  - `/models` - Models usados no app
  - `/routes` - Configuração das rotas de navegação do app
  - `/screens` - São as telas do APP
    - `login`- Cada pasta representa uma tela e contém um index.tsx
  - `/store` - Inclui toda configuração para Store / gerenciamente global de estados.
    - `modules` - configura os regucers das funcionalidades do app
      - `auth` - Cada pasta representa uma funcionalidade
        - `slice.ts` - Configura os actions/reducers
    - `reducers.ts` - Combina todos os reducers
    - `sagas.ts` - Combina todas as funcionalidades com sagas
    - `index.js` - Set ups store and export things

## Iniciando

1. Clone esse repositorio, `git clone https://github.com/grupoatto/template-react-native.git <your project name>`
2. Entre na pasta do repositorio, `cd <your project name>`
3. Delete a pasta `.git`, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) para alterar o nome do projeto `$ npx react-native-rename <newName>`
5. Execute `yarn` ou `npm install` pra instalar as dependencias

6) Inicie o projeto com `npm start`
7) Teste a aplicação:

- On Android:
  - Run `react-native run-android`
- On iOS:
  - Open `ios/YourReactProject.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

8. Divirta-se!!!
