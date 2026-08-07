import express, { Request, Response } from 'express';

// Objetos do Express para manipulação do metodo HTTP.
const app = express();
// porta para subir a aplicação 
const PORT = 3000;

// URL : ENdpoint para acessar a aplicação

const DB_URL = 'http://localhost:3001/alunos';

// criando a interface, para tipar o objeto aluno
interface Aluno {
    id?: string;
    rm: number;
    nome: string;
    nota1: number;
    nota2: number;
}

// Consfigurando o expresse para aceitar JSON no corpo da requisição
app.use(express.json());

// Disponibilizar os arquivos da pasta public
app.use(express.static('public'));

// Rota para alunos
app.get('/alunos', async (req: Request, res: Response) => {
    try {
        const resposta = await fetch(DB_URL);
        if (!resposta.ok) {
            throw new Error("Não foi possível consultar os dados de alunos");
        }
        const alunos = await resposta.json();
        res.json(alunos);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

// Rota para cadastrar um aluno
app.post("/api/alunos", async (req: Request, res: Response) => {
  const nome = String(req.body.nome ?? "").trim();
  const nota1 = Number(req.body.nota1);
  const nota2 = Number(req.body.nota2);

  const notasInvalidas =
    !Number.isFinite(nota1) ||
    !Number.isFinite(nota2) ||
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10;

  if (!nome || notasInvalidas) {
    res.status(400).json({
      mensagem: "Informe um nome e notas entre 0 e 10."
    });

    return;
  }

  const aluno: Aluno = {
    nome,
    rm: Number(req.body.rm),
    nota1,
    nota2
  };

  try {
    const resposta = await fetch(DB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(aluno)
    });

    if (!resposta.ok) {
      throw new Error("Não foi possível cadastrar o aluno.");
    }

    const novoAluno = (await resposta.json()) as Aluno;

    res.status(201).json(novoAluno);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao cadastrar o aluno."
    });
  }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})