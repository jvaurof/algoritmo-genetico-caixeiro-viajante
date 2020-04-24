function Cidade() {
  let pontoX
  let pontoY
  let id

  this.getPontoX = function () {
    return pontoX
  }

  this.getPontoY = function () {
    return pontoY
  }

  this.getId = function () {
    return id
  }

  this.setCoordenada = function () {
    pontoX = Math.floor(Math.random() * 100)
    pontoY = Math.floor(Math.random() * 100)
  }

  this.setId = function (i) {
    id = i
  }
}

module.exports = Cidade