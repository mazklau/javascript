function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `agora são ${hora} horas. `
if (hora >= 0 && hora <= 12){
    //Bom dia
    img.src = 'imagem/dia.png'
    document.body.style.background = ' rgb(201, 207, 60)'
}else if(hora >= 12 && hora <=18){
    //Boa tarde 
    img.src = 'imagem/tarde.png'
    document.body.style.background = ' rgb(191, 136, 65)'
}else{   
   //Boa noite
    img.src= 'imagem/noite.png'
    document.body.style.background = 'rgb(7, 2, 87)'

}


}