var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} Horas.`);
if(hora < 12){
    console.log('Bom dia!');
}else if (hora <=18){
    console.log('Bota tarde!');
}
else if (hora >=24){
    console.log('Boa madrugada');
   }else{
    console.log('Boa Noite!');
}