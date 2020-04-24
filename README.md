[![Build Status](https://travis-ci.org/Arquisoft/viade_es4a.svg?branch=master)](https://travis-ci.org/Arquisoft/viade_es4a)
[![codecov](https://codecov.io/gh/Arquisoft/viade_es4a/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/viade_es4a)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2ab2a9322b4040d386f7cc5ad090b375)](https://www.codacy.com/gh/Arquisoft/viade_es4a?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/viade_es4a&amp;utm_campaign=Badge_Grade)

# VIADE_es4a

This project shows how to create a new react webapp and configure it using travis in order to enable continuous integration for students of Oviedo's University.

## Contributors
*   Israel Méndez.
*   Antonio Flambó.
*   Aique Montes.
*   Raúl García.
*   Pelayo Rodríguez.
*   Adrián Díaz.

## Requirements
*   Node js : You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine.
*   Ruby.
*   AsciiDoctor : You’ll need to have asciiDoctor and asciiDoctor-diagrams.

```sh
sudo apt-get update
sudo apt-get -y install ruby nodejs
sudo gem install asciidoctor asciidoctor-diagram
sudo apt-get -y install graphviz 
```

## Run project

```sh
npm install
npm start
```

If you have installed yet, you don't need npm install, you can use npm update for actualize the dependencies.

Or, you can entry in this web <https://arquisoft.github.io/viade_es4a/> and you can work with our app.

## Build documentation

```sh
Node and Ruby are required. 
npm install
gem install asciidoctor
gem install asciidoctor-diagram 
npm run docs
```

Para ver la documentación: <https://arquisoft.github.io/viade_es4a/docs/index.html>

## Run test

```sh
Chi is required. 
npm i chi 
npm test:e2e
```
