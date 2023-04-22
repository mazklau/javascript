function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]verifique os dados e tente novamente')
    
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem/')
        if (fsex[0].checked){ 
            genero = 'homem'
            if (idade <= 2){
            img.setAttribute( 'src', 'imagem/1.jpg')
            }
            else if (idade > 2 && idade <= 10){
            //criança
            img.setAttribute( 'src', 'imagem/cri1.jpg')
            }
            else if ( idade <= 17){
                //adolecente
            img.setAttribute( 'src', 'imagem/ad.jpg')
            }
            else if ( idade <= 30 ){
                //jovem
            img.setAttribute( 'src', 'imagem/jovem.jpg')
            }
            else if ( idade <= 50 ){
                //jovem
            img.setAttribute( 'src', 'imagem/experiente.jpg')
            }
            else if(idade <= 70 ){
                //experiente
            img.setAttribute( 'src', 'imagem/51.jpg')
            }
            else  { 
                //velhor
            img.setAttribute( 'src', 'imagem/idoso.jpg')
            } 
         } if (fsex[1].checked){
            genero = 'mulher'
            if (idade <= 2){
            img.setAttribute( 'src', 'imagem/2.jpg')
            }
            else if (idade > 2 && idade <= 10){
            //criança
            img.setAttribute( 'src', 'imagem/cri.jpg')
            }
            else if ( idade <= 17){
                //adolecente
            img.setAttribute( 'src','imagem/ad1.jpg')
            }
            else if ( idade <= 30 ){
                //jovem
            img.setAttribute( 'src', 'imagem/jovem1.jpg')
            }
            else if(idade <= 50 ){
                //experiente
            img.setAttribute( 'src', 'imagem/experiente1.jpg')
            }
            else if(idade <= 70 ){
                //experiente
                img.setAttribute( 'src', 'imagem/52.jpg')
            }
            else { 
                //velhor
             img.setAttribute( 'src', 'imagem/idosa.jpg')
            }
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
        res.appendChild(img)
   }
}