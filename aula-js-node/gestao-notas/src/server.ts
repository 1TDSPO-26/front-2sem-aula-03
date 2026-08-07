import express, { Request, Response } from 'express';

//objeto do express para manipular os métodos HTTP 
const app = express();

//Porta selecionada ara alocar a aplicação
const PORT = 3000;


//URL do Endpoint criada de nossa API-FAKE / db.json
const DB_URL = 'http://localhost:3001/alunos';


//Criação de Interface, visadno a garantia de tipos:
interface Aluno {
    id?: String;
    rm: number;
    nome: string;
    nota1: number;
    nota2: number;
}


//permite o express a receber JSON
app.use(express.json());

//Disponibilizar os arquivos da pasta public
app.use(express.static('public'));

//Rota para consulta dos alunos
app.get("/alunos", async (req: Request, _res: Response) => {
    try {
        
        const resposta = await fetch(DB_URL);
        if (!resposta.ok) {
            throw new Error("Não foi possivel consultar os alunos!");

        }
        const alunos = await resposta.json();

        _res.json(alunos);


    } catch (error) { 
        console.error(error);
        _res.status(500).json({ error: "Erro interno do servidor" });
    }   
        
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
