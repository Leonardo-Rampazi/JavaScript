function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number (fano.value) > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!'); 
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //Testando-->res.innerHTML = `Idade calculada: ${idade}`
        var genero =  '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<10){
               //Criança
               img.setAttribute('src', 'babym.png'); 
            }else if(idade <21){
                //jovem
                img.setAttribute('src','jovem.png');
            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adultomasculino.png');
            }else{
                //idoso
                img.setAttribute('src','idoso.png');
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade<10){
                //Criança
                img.setAttribute('src','babyf.png'); 
             }else if(idade <21){
                 //jovem
                 img.setAttribute('src','jovemf.png');
             }else if(idade <50){
                 //Adulto
                 img.setAttribute('src','adultofeminino.png');
             }else{
                 //idoso
                 img.setAttribute('src','idosa.png');
             }
        }
        res.style.textAlign = 'center';
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}