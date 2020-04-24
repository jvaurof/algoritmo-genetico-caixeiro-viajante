function Objetivo() {

  this.definirParada = function (geracaoAtual, maximoGeracoes) {
    if (maximoGeracoes == 'infinita')
      return false

    return geracaoAtual >= maximoGeracoes
  }
}

module.exports = Objetivo