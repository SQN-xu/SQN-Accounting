let notas = [];

export function processarXML(xml) {
  // SIMULAÇÃO de leitura de XML
  const nota = {
    id: Date.now(),
    numero: Math.floor(Math.random() * 10000),
    valor: 1000,
    icms: calcularICMS(1000),
  };

  notas.push(nota);
  return nota;
}

export function listar() {
  return notas;
}

function calcularICMS(valor) {
  return valor * 0.18;
}
