const formulario = document.querySelector("#form-aluno");
const listaAlunos = document.querySelector("#lista-alunos");
const mensagem = document.querySelector("#mensagem");

function adicionarCelula(linha, valor) {
  const celula = document.createElement("td");

  celula.textContent = String(valor);
  linha.appendChild(celula);
}

function mostrarAluno(aluno) {
  const media = (Number(aluno.nota1) + Number(aluno.nota2)) / 2;
  const situacao = media >= 6 ? "Aprovado" : "Reprovado";

  const linha = document.createElement("tr");

  adicionarCelula(linha, aluno.nome);
  adicionarCelula(linha, aluno.rm);
  adicionarCelula(linha, aluno.nota1);
  adicionarCelula(linha, aluno.nota2);
  adicionarCelula(linha, media.toFixed(1));
  adicionarCelula(linha, situacao);

  listaAlunos.appendChild(linha);
}

async function carregarAlunos() {
  try {
    const resposta = await fetch("/alunos");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os alunos.");
    }

    const alunos = await resposta.json();

    listaAlunos.textContent = "";

    alunos.forEach(mostrarAluno);
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const aluno = {
    nome: document.querySelector("#nome").value,
    rm: Number(document.querySelector("#rm").value),
    nota1: Number(document.querySelector("#nota1").value),
    nota2: Number(document.querySelector("#nota2").value)
  };

  try {
    const resposta = await fetch("/alunos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(aluno)
    });

    const resultado = await resposta.json();

    if (!resposta.ok) {
      throw new Error(resultado.mensagem);
    }

    mensagem.textContent = "Aluno cadastrado com sucesso!";

    formulario.reset();

    await carregarAlunos();
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
});



carregarAlunos();