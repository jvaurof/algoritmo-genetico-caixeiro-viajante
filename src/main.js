const Evolucao = require('./classes/evolucao.js')

const QUANTIDADE_CIDADES = 6
const TAMANHO_POPULACAO = 6
const LIMITE_GERACOES = 100

new Evolucao(
  QUANTIDADE_CIDADES,
  TAMANHO_POPULACAO,
  LIMITE_GERACOES).evoluir()

