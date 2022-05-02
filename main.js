const filaPreferencial = [];
const filaGeral = [];
const NUMERO_INICIAL = 1;
// html elements
const listaDeChamadaPreferencial = document.getElementById(
  "lista-de-chamada-preferencial"
);
const listaDeChamadaGeral = document.getElementById("lista-de-chamada-geral");
const senhaAtual = document.getElementById("senha");
const seletorGeral = document.getElementById("senha-geral");
const seletorpreferencial = document.getElementById("senha-preferencial");

const valor = seletorGeral.value;

function cancelarSenhaGeral() {
  filaGeral.splice(seletorGeral.value - 1);
}

function cancelarSenhaPreferencial() {
  filaPreferencial.splice(seletorpreferencial.value - 1);
}

function limparListaGeral() {
  listaDeChamadaGeral.innerHTML = "";
  seletorGeral.innerHTML = "";
}

function limparListaPreferencial() {
  listaDeChamadaPreferencial.innerHTML = "";
  seletorpreferencial.innerHTML = "";
}

function atualizarListaGeral() {
  for (let g = 0; g < filaGeral.length; g++) {
    listaDeChamadaGeral.innerHTML += "G" + filaGeral[g] + "<br>";
    seletorGeral.innerHTML +=
      "<" +
      "option value='" +
      filaGeral[g] +
      "'>" +
      "G" +
      filaGeral[g] +
      "<br>";
  }
}

function atualizarListaPreferencial() {
  for (let p = 0; p < filaPreferencial.length; p++) {
    listaDeChamadaPreferencial.innerHTML += "P" + filaPreferencial[p] + "<br>";
    seletorpreferencial.innerHTML +=
      "<" +
      "option value='" +
      filaPreferencial[p] +
      "'>" +
      "P" +
      filaPreferencial[p] +
      "<br>";
  }
}

function criaSenhaPreferencial() {
  if (filaPreferencial.length < NUMERO_INICIAL) {
    filaPreferencial.push(NUMERO_INICIAL);
    return;
  }
  const proximaSenha = filaPreferencial[filaPreferencial.length - 1] + 1;
  filaPreferencial.push(proximaSenha);
}

function criaSenhaGeral() {
  if (filaGeral.length < NUMERO_INICIAL) {
    filaGeral.push(NUMERO_INICIAL);
    return;
  }
  const proximaSenha = filaGeral[filaGeral.length - 1] + 1;
  filaGeral.push(proximaSenha);
}

function chamarSenha() {
  if (filaPreferencial.length >= 1) {
    senhaAtual.innerHTML = "P" + filaPreferencial[0];
    filaPreferencial.shift();
  } else if (filaGeral.length >= 1) {
    senhaAtual.innerHTML = "G" + filaGeral[0];
    filaGeral.shift();
  } else {
    senhaAtual.innerHTML = "sem senhas emitidas";
  }
}
