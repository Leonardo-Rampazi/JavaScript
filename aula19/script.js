function contar(){
    let atualEstoque = parseFloat(document.getElementById('atualEstoque').value);
    let maximaEstoque = parseFloat(document.getElementById('maximaEstoque').value);
    let minimaEstoque = parseFloat(document.getElementById('minimaEstoque').value);
    let res = document.getElementById('res');
    let mediaEstoque = (maximaEstoque + minimaEstoque) / 2;
    res.innerHTML = `Descobrimos que é essa a quantidade média do estoque: ${mediaEstoque}`;
    if(atualEstoque >= mediaEstoque){
        res.innerHTML = `Não precisa efetuar a compra pois o valor ${atualEstoque} atual passou da média de estoque ${mediaEstoque} `;
    } else {
        res.innerHTML = `É bom efetuar mais compra para o estoque pois o valor do estoque atual: ${atualEstoque} não passou da média de estoque ${mediaEstoque}`;
    }
}
