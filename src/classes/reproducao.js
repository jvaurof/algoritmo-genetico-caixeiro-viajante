function Reproducao() {
  let selecionados = []

  function sortearIndividuos(populacao) {
    /*sortear individuos pela proporção do fitness*/
    let individuos = populacao.getIndividuos()

    populacao.getIndividuos().forEach(() => {
      let somatorioFitness = 0

      individuos.forEach(element => {
        somatorioFitness += element.getFitness()
      })

      let sorteio = Math.floor(Math.random() * somatorioFitness)
      let posicaoSorteada = -1

      do {
        posicaoSorteada++
        sorteio -= individuos[posicaoSorteada].getFitness()
      } while (sorteio > 0)

      selecionados.push(individuos[posicaoSorteada])
      individuos.splice(posicaoSorteada, 1)
    })
  }

  this.reproduzir = function (populacao, quantidadeCidades) {
    sortearIndividuos(populacao)

    /*cruzamento Order Crossover (OX)*/
    for (i = 0; i < populacao.getTamanho(); i = i + 2) {
      let ponto1 = Math.floor(Math.random() * (quantidadeCidades - 1))
      let ponto2

      if (ponto1 == 0)
        ponto2 = Math.floor(Math.random() * ((quantidadeCidades - 2) - (ponto1 + 1))) + (ponto1 + 1)
      else
        ponto2 = Math.floor(Math.random() * ((quantidadeCidades - 1) - (ponto1 + 1))) + (ponto1 + 1)

      let filho1 = []
      let filho2 = []

      for (let j = ponto1; j <= ponto2; j++) {
        filho1[j] = selecionados[i].getCromossomo()[j]
        filho2[j] = selecionados[i + 1].getCromossomo()[j]
      }

      let j = ponto2
      let k = ponto2

      while (true) {
        j++

        if (j == quantidadeCidades)
          j = 0

        if (j == ponto1)
          break

        let cidadeExiste

        do {
          k++

          if (k == quantidadeCidades)
            k = 0

          cidadeExiste = filho1.includes(selecionados[i + 1].getCromossomo()[k])
        } while (cidadeExiste)

        filho1[j] = selecionados[i + 1].getCromossomo()[k]
      }

      j = ponto2
      k = ponto2

      while (true) {
        j++

        if (j == quantidadeCidades)
          j = 0

        if (j == ponto1)
          break

        let cidadeExiste

        do {
          k++

          if (k == quantidadeCidades)
            k = 0

          cidadeExiste = filho2.includes(selecionados[i].getCromossomo()[k])
        } while (cidadeExiste)

        filho2[j] = selecionados[i].getCromossomo()[k]
      }

      populacao.adicionarFilhos(filho1, filho2)
    }
  }
}

module.exports = Reproducao