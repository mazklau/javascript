function contar(){
    let a  = document.getElementById('ini')
    let n2  = document.getElementById('fim')
    let n3  = document.getElementById('passo')
    let res = document.getElementById('res')
  
  if (a.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 ){
    window.alert(`[ERRO] verifique  os dados e tente noamente `)

  }else{
    res.innerHTML = 'Contando: '
    let i = Number(a.value)
    let f =  Number(n2.value)
    let p = Number(n3.value)
    
    for(let c = i; c <= f; c += p){
      res.innerHTML += `${c}`
    }

  }
}