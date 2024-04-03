function clicou() {
    var nome = document.querySelector('input#nome').value.trim();
    var vezes1 = parseInt(document.getElementById('vezes').value.trim());
    var res = document.getElementById('res');
    res.innerHTML = ""; // Limpar conteúdo anterior
    if (vezes1 >= 0 && vezes1 <= 10) {
        for(i = 1;i<=vezes1;i++){
          res.innerHTML=`<p> Bem-vindo(a) ${nome}, Aqui vão as vezes que digitou para o for trabalhar ${vezes1}`  
        } 
    }else{
        res.innerHTML = `<p>Por favor, digite um número válido entre 0 e 10.</p>`
    }
}











/*console.log('Vai começar...');
for(var c=1;c<=5;c++){
    console.log(c);
}
console.log('FIM!'); */