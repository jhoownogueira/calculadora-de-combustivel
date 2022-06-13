function calcularResultado() {
  let litros = document.getElementById('litros');
  let distancia = document.getElementById('distancia');


  if (distancia.value == '') {
    document.getElementById('resultado-media').value = 'Digite distância.';
  } else if (litros.value == '') {
    document.getElementById('resultado-media').value = 'Digite litros.';
  } else {
    litros = litros.value;
    distancia = distancia.value;
    resultado = (distancia / litros).toFixed(2);

    document.getElementById('resultado-media').value = resultado;
  }
};

function calcularResultadoPreco() {
  let gasolina = document.getElementById('gasolina');
  let alcool = document.getElementById('alcool');

  if (gasolina.value == '') {
    document.getElementById('resultado-preco').value = 'Digite Preço Gasolina.';
    removeClass();
  } else if (alcool.value == '') {
    document.getElementById('resultado-preco').value = 'Digite Preço Álcool.';
    removeClass();
  } else {
    gasolina = gasolina.value;
    alcool = alcool.value;
    resultadoPreco = ((alcool * 100) / gasolina);

    mediaPreco();
  }

}

function mediaPreco() {
  if (resultadoPreco >= 70) {
    document.getElementById('resultado-preco').value = 'Abastecer Gasolina';
    document.getElementById('resultado-preco').classList.add('gasolina');
    document.getElementById('resultado-preco').classList.remove('alcool');
  }  else {
    document.getElementById('resultado-preco').value = 'Abastecer Álcool';
    document.getElementById('resultado-preco').classList.add('alcool');
    document.getElementById('resultado-preco').classList.remove('gasolina');
  } 
}


function removeClass() {
    document.getElementById('resultado-preco').classList.remove('alcool');
    document.getElementById('resultado-preco').classList.remove('gasolina');
}