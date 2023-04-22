let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(num){
  if(Number(num) >= 1 && Number(num) <= 100){
    return true
  }else{
    return false
  }
}
function islista(num, l){
  if(l.indexOf(Number(num)) != -1 ){
    return true
  }else{
    return false
  }
}

function Adicionar(){
  if (isNumero(num.value) && !islista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement(`option`)
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ``
}else{
  window.alert(`Valor invalido ou ja encontrado na lista`)
}
num.value = ``
num.focus()
}

function finalizar(){
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior)
         maior = valores[pos]
      if(valores[pos] < menor)
         menor = valores[pos] 
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrado.</p>`
    res.innerHTML += `<p>maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>somando todo os valores termos ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores e igual ${media}.</p>`   
  }
}