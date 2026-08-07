import express, { application, Request, Response } from 'express';

//objeto do express para manipular os métodos HTTP
const app = express();

//Porta selecionada para alocar a aplicação
const PORT = 3000;

//URL do Endpoint criada de nossa API-FAKE / db.json
const DB_URL = 'http://localhost:3001/alunos';

//Criaçao da Interface, visando a garantia de tipos: 
interface Aluno{
    id?: string;
    rm: number;
    nome: string;
    nota1: number;
    nota2: number;
}

//Permite o express a receber JSON
app.use(express.json());

//Disponibilizar os arquivos da pasta public
app.use(express.static("public"));

//Rota para a consulta dos alunos
app.get("/alunos", async (_req: Request, res: Response) => {

    try {

        const resposta = await fetch(DB_URL);

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar os alunos!")
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