import express, { Request, Response } from 'express';

// Objeto do express para manipular os métodos HTTP
const app = express();

// Porta selecionada para alocar a aplicacao
const PORT = 3000;

// URL do endpoint criada na nossa API-FAKE / db.json
const DB_URL = 'http://localhost:3001/alunos';

// Criação da interface, visando a garantia de tipos
interface Aluno {
    id?: string;
    rm: number;
    nome: string;
    nota1: number;
    nota2: number;
}

// Permite o expres a receber JSON
app.use(express.json());

// Disponibilizar os arquivos da pasta public
app.use(express.static("public"));

// Rota para consulta dos alunos
app.get("/alunos", async (req: Request, res: Response) => {

    try {
        const resposta = await fetch(DB_URL);

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar os alunos!");
        }

        const alunos = await resposta.json();

        res.json(alunos);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao consultar os alunos!" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});

// Rota para cadastrar um aluno
app.post("/api/alunos", async (req: Request, res: Response) => {
    const rm = Number(req.body.rm);
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
        rm,
        nome,
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