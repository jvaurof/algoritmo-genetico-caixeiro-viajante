# Algoritmo genético aplicado ao caso do caixeiro viajante

Algoritmo desenvolvido como um dos requisitos do mestrado em computação aplicada da Universidade Estadual de Ponta Grossa - UEPG

## Pré-requisitos

- node

Verificar se o node está instalado:
``` 
node -v 
```

Instruções para instalação aqui: https://nodejs.org/en/

- yarn

Verificar se o yarn está instalado:
```
yarn -v 
```
Instruções para instalação aqui: https://yarnpkg.com/

## Começando

- Primeiramente é preciso fazer o download do projeto
```
https://github.com/jvaurof/algoritmo-genetico-caixeiro-viajante.git
```

- Baixar as dependências

Este comando é necessário somente uma única vez 
```
yarn
```

- Preencher os parâmetros de entrada no arquivo src/main.js

![Captura de tela de 2020-04-24 14-43-48](https://user-images.githubusercontent.com/33234056/80241703-6fcaac80-863a-11ea-8c9a-662864117098.png)

1. QUANTIDADE_CIDADES - quantidade de cidades que se deseja analisar 
2. TAMANHO_POPULACAO - tamanho da população
3. LIMITE_GERACOES - quantidade máxima de gerações, caso não informado a quantidade máxima de gerações será infinita

- Executar o algoritmo
```
node src/main.js
```

## Fontes
- Problema do caixeiro viajante

http://www.mat.ufrgs.br/~portosil/caixeiro

- Pesquisa Operacional II - Aula 07 - O problema do caixeiro viajante

https://www.youtube.com/watch?v=Doy6cBjb8uw
