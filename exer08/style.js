

  function calcular(){
  var txtv = window.document.getElementById('txtvel')
  var res = window.document.getElementById('res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p> Sua velocidade atual e de <strong>${vel}Km/h</strong></p>`
  if (vel > 60) {
    res.innerHTML += `<p> voce esta <strong>multado</strong> por excesso de velocidade</p>`
  }
  res.innerHTML += `<p> Dirija sempre com cinto de segurança!</p>`
}