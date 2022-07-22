function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO]Tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var genero =''
        if (fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade <3){
                img.setAttribute('src','img/bebe.png')
            }else if(idade >=3 && idade <12){
                img.setAttribute('src','img/menino.png')
            }else if(idade >=12 && idade<18){
                img.setAttribute('src','img/JovemHomem.png')
            }else if(idade >=18 && idade<60){
                img.setAttribute('src','img/Homem.png')
            }else{
                img.setAttribute('src','img/Idoso.png')
            }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >= 0 && idade <3){
                img.setAttribute('src','img/bebe.png')
            }else if(idade >=3 && idade <12){
                img.setAttribute('src','img/menina.png')
            }else if(idade >=12 && idade<18){
                img.setAttribute('src','img/JovemMulher.png')
            }else if(idade >=18 && idade<60){
                img.setAttribute('src','img/Mulher.png')
            }else{
                img.setAttribute('src','img/Idosa.png')
            }
        }

        res.innerHTML = `Verificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}