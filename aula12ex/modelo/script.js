function contar(){
var atualEstoque = document.getElementById('atualEstoque');
var maximaEstoque = document.getElementById('maximaEstoque');
var minimaEstoque = document.getElementById('minimaEstoque');
let res = document.getElementById('res');
var mediaEstoque = (maximaEstoque + minimaEstoque) / 2;
res.innerHTML=`{mediaEstoque}`
}