const Rotas = require('./rotas')
const Populacao = require('./populacao')
const Reproducao = require('./reproducao')
const Mutacao = require('./mutacao')
const Objetivo = require('./objetivo')

function Evolucao(quantidadeCidades, tamanhoPopulacao, limiteGeracoes = 'infinata') {


  const objetivo = new Objetivo()
  const rotas = new Rotas(quantidadeCidades)

  const populacao = new Populacao()
  populacao.setTamanho(tamanhoPopulacao)

  this.evoluir = function () {
    populacao.iniciarPopulacao(rotas.getQuantidadeCidades())
    populacao.calcularFitness(rotas.getDistancias())

    do {
      populacao.exibirPopoulacao()

      if (objetivo.definirParada(populacao.getGeracao(), limiteGeracoes))
        break

      reproducao = new Reproducao()
      reproducao.reproduzir(populacao, rotas.getQuantidadeCidades())

      mutacao = new Mutacao()
      mutacao.mutar(populacao, rotas.getQuantidadeCidades())

      populacao.calcularFitness(rotas.getDistancias())
      populacao.ajustarPopulacao()
      populacao.setGeracao()
    } while (true)
  }
}

module.exports = Evolucao