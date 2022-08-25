function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert ('[ERRO] Verifique se os dados estão corretos e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'bebehomem.jpg')
            } else if(idade >= 12 && idade < 30) {
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if(idade >= 30 && idade < 60) {
                img.setAttribute('src', 'homem.jpg')
            } else if(idade >= 60) {
                img.setAttribute('src', 'idoso.jpg')
            }
            } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'bebemulher.jpg')
            } else if(idade >= 12 && idade < 30) {
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade >= 30 && idade < 60) {
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', 'idosa.jpg')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}