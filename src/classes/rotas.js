const Cidade = require('./cidade')

function Rotas(qc) {
  const quantidadeCidades = qc
  const cidades = []
  const distancias = []

  criarCidades()
  definirDistancias()

  this.getQuantidadeCidades = function () {
    return quantidadeCidades
  }

  this.getCidades = function () {
    return cidades.slice()
  }

  this.getDistancias = function () {
    return distancias
  }

  function criarCidades() {
    for (let i = 0; i < quantidadeCidades; i++) {
      const cidade = new Cidade()
      cidade.setCoordenada()
      cidade.setId(i)
      cidades.push(cidade)
    }
  }

  function definirDistancias() {
    cidades.forEach((cidade1, i) => {
      let dist = []
      cidades.forEach((cidade2, j) => {
        /*teorema de pitagoras*/
        const a = Math.pow((cidade1.getPontoX() - cidade2.getPontoX()), 2)
        const b = Math.pow((cidade1.getPontoY() - cidade2.getPontoY()), 2)
        dist[j] = parseInt(Math.sqrt(a + b), 10)
      })
      distancias.push(dist)
    })
  }

  this.exibirDistancias = function () {
    console.log('Distâncias')
    console.table(distancias)
  }
}

module.exports = Rotas