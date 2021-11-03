var vp = document.getElementById('preco');
var vd = document.getElementById('dado');
var troco = document.querySelector('.troco');

function calcTroco(){
  var vt = String(vd.value - vp.value);
  if(vp.value.length == 0 || vd.value.length == 0){
    troco.innerText = 'Preencha todos os campos.';
  } else if(vt<0){
    var vtArray = vt.split('');
    vtArray.shift();
    troco.innerText = `Falta R$${vtArray.join('')}.`;
  } else {
    troco.innerText = `Troco: R$${vt}.`;
  }
}