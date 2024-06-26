function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        window.alert('[ERRO] Faltam dados!'); 
    } else {
       res.innerHTML = `Contando: <br>`;
       let i = Number(ini.value);
       let f = Number(fim.value);
       let p = Number(passo.value);
       if(p<=0){
        window.alert('Passo Inválido! Considerando PASSO 1');
       }
       let numeros = "";
       if (i < f) {
           // contagem crescente
           for (let c = i; c <= f; c += p) {
               numeros += `\u{1F449} ${c}, `;
           }
       } else {
           // contagem regressiva
           for (let c = i; c >= f; c -= p) {
               numeros += `\u{1F449} ${c}, `;
           }
       }
       res.innerHTML += numeros.slice(0, -2); // Remove a vírgula extra no final
       res.innerHTML += ` Fim! \u{1F3C1}`; // Adiciona a mensagem de fim
    }
}
