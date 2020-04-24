function Individuo() {
  let cromossomo = []
  let fitness = 0

  this.getCromossomo = function () {
    return cromossomo.slice()
  }

  this.getFitness = function () {
    return fitness
  }

  this.setCromossomo = function (c) {
    cromossomo = c
  }

  this.setFitness = function (f) {
    fitness = f
  }

  this.setCromossomoIncial = function (quantidadeCidades) {
    while (cromossomo.length < quantidadeCidades) {
      const cidadeAleatoria = Math.floor(Math.random() * quantidadeCidades)

      const cidadeExiste = cromossomo.includes(cidadeAleatoria)

      if (!cidadeExiste)
        cromossomo.push(cidadeAleatoria)
    }
  }

  this.inverterGene = function (gene1, gene2) {
    let aux = cromossomo[gene1]

    cromossomo[gene1] = cromossomo[gene2]
    cromossomo[gene2] = aux
  }
}

module.exports = Individuo