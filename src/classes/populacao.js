const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []
  let geracao = 1

  this.getTamanho = function () {
    return tamanho
  }

  this.getIndividuos = function () {
    return individuos.slice()
  }

  this.getGeracao = function () {
    return geracao
  }

  this.setTamanho = function (t) {
    if (t <= 0) {
      console.log('O tamanho da população deve ser maior que 0.')
      process.exit(1)
    }

    tamanho = t % 2 == 0 ? t : ++t
  }

  this.setGeracao = function () {
    geracao++
  }

  this.iniciarPopulacao = function (quantidadeCidades) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomoIncial(quantidadeCidades)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (distancias) {
    individuos.forEach((individuo) => {
      let fitness = 0
      let cidadeA
      let cidadeB
      let index

      for (index = 0; index < individuo.getCromossomo().length - 1; index++) {
        cidadeA = individuo.getCromossomo()[index]
        cidadeB = individuo.getCromossomo()[index + 1]

        fitness += distancias[cidadeA][cidadeB]
      }

      cidadeA = individuo.getCromossomo()[index]
      cidadeB = individuo.getCromossomo()[0]
      fitness += distancias[cidadeA][cidadeB]

      individuo.setFitness(fitness)
    })

    individuos.sort((a, b) => {
      return a.getFitness() - b.getFitness()
    })
  }

  this.adicionarFilhos = function (filho1, filho2) {
    let individuo = new Individuo()
    individuo.setCromossomo(filho1)
    individuos.push(individuo)

    individuo = new Individuo()
    individuo.setCromossomo(filho2)
    individuos.push(individuo)
  }

  this.ajustarPopulacao = function () {
    individuos.splice(tamanho)
  }

  this.exibirPopoulacao = function () {
    let cromossomo = []
    let fitness = []

    individuos.forEach((individuo, index) => {
      cromossomo[index] = individuo.getCromossomo()
      fitness[index] = individuo.getFitness()
    })

    console.log('População:')
    console.table(cromossomo)
    console.log('Fitness:')
    console.table(fitness)
    console.log('geração: ', geracao)
    console.log('\n****************************\n')
  }

  this.exibirSolucaoEncontrada = function () {
    console.log('Solução encontrada:')
    console.log('  Individuo: ', individuos[0].getCromossomo())
    console.log('  Menor distância: ', individuos[0].getFitness())
  }
}

module.exports = Populacao