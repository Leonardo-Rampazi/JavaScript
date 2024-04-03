function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
//var hora = 11;
msg.innerHTML= `Agora são ${hora} horas.`
if(hora>= 0 && hora <12){
    //BOM DIA!
    img.src = 'imagemdiap.png';
    document.body.style.background = '#e2cd9f'
}else if (hora >=12 && hora <= 18){
    //BOA TARDE!
    img.src = 'imagemtardep.png';
    document.body.style.background = '#D9882B'
}else{
    img.src = 'imagemnoitep.png'
    document.body.style.background = '#04263D'
    //BOA NOITE!
}
}