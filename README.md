[![Build Status](https://travis-ci.org/Arquisoft/viade_es4a.svg?branch=master)](https://travis-ci.org/Arquisoft/viade_es4a)
[![codecov](https://codecov.io/gh/Arquisoft/viade_es4a/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/viade_es4a)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2ab2a9322b4040d386f7cc5ad090b375)](https://www.codacy.com/gh/Arquisoft/viade_es4a?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/viade_es4a&amp;utm_campaign=Badge_Grade)

# VIADE_es4a

This project shows how to create a new react webapp and configure it using travis in order to enable continuous integration for students of Oviedo's University.

## Contributors
 *Israel Ménez
 *Antonio Flambó
 *Aique Montes
 *Raúl García
 *Pelayo Rodríguez
 *Adrián Moro

## Requirements
*Node js : You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine.
*Ruby
*AsciiDoctor : You’ll need to have asciiDoctor-diagrams.

```
sudo apt-get update
sudo apt-get -y install ruby nodejs
sudo gem install asciidoctor asciidoctor-diagram
sudo apt-get -y install graphviz
```

## Run project

```
npm install
npm start
```

If you have installed yet, you don't need npm install, you can use npm update for actualize the dependencies.

## Build documentation

```
Node and Ruby are required. 
npm install
gem install asciidoctor
gem install asciidoctor-diagram 
npm run docs
```
