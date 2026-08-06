# Apostila de TypeScript — ADS

Repositório oficial da apostila e das atividades da disciplina de **TypeScript**, destinada aos estudantes do **1º ano de Análise e Desenvolvimento de Sistemas**.

O material foi organizado para apoiar aulas presenciais, encontros online, práticas em laboratório e revisão individual.

**Autor:** Alexandre Carlos de Jesus  
**Ano:** 2026

---

## Objetivo

Este repositório acompanha uma trilha progressiva de aprendizagem em TypeScript.

Ao longo das aulas, você irá:

- preparar o ambiente de desenvolvimento;
- utilizar VS Code, terminal, Node.js e npm;
- compreender o papel do `package.json`;
- instalar e configurar o TypeScript;
- entender o compilador `tsc`;
- configurar o `tsconfig.json`;
- revisar conceitos essenciais de JavaScript;
- aplicar tipos, inferência, funções e arrays;
- modelar dados com interfaces e type aliases;
- trabalhar com JSON, `Date`, `localStorage` e `sessionStorage`;
- organizar o código com componentes e módulos;
- desenvolver um projeto integrador.

---

## Organização das aulas

A disciplina está dividida em **8 aulas de 2 horas**, sendo:

| Aula | Modalidade | Conteúdo principal |
|---|---|---|
| 1 | Presencial | VS Code, pasta de trabalho e terminal |
| 2 | Presencial | Node.js e primeiro programa JavaScript |
| 3 | Presencial | npm, `package.json`, instalação do TypeScript, `tsc` e `tsconfig.json` |
| 4 | Presencial | Valores, tipos, `typeof`, anotação e inferência |
| 5 | Online | `Date`, funções e arrays tipados |
| 6 | Online | Objetos, interfaces, JSON e armazenamento |
| 7 | Online | Métodos de arrays, type aliases, componentes e módulos |
| 8 | Online | Projeto integrador, revisão e entrega |

---

## Trilha de aprendizagem

A sequência do curso segue este caminho:

```text
JavaScript
   ↓
VS Code e terminal
   ↓
Node.js
   ↓
npm e package.json
   ↓
TypeScript
   ↓
tsc e tsconfig.json
   ↓
Componentes e módulos
   ↓
Projeto integrador
```

---

## Pré-requisitos

Antes de começar, tenha instalado:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js em versão LTS](https://nodejs.org/)
- Git, caso o repositório seja utilizado por clonagem

Verifique a instalação no terminal:

```bash
node --version
npm --version
git --version
```

---

## Como obter o repositório

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd NOME_DO_REPOSITORIO
```

Abra no VS Code:

```bash
code .
```

Caso o comando `code` não esteja disponível, abra o VS Code e utilize:

```text
Arquivo > Abrir Pasta
```

---

## Estrutura sugerida do repositório

```text
apostila-typescript/
├── README.md
├── apostila/
│   └── apostila-typescript.pdf
├── aulas/
│   ├── aula-01/
│   ├── aula-02/
│   ├── aula-03/
│   ├── aula-04/
│   ├── aula-05/
│   ├── aula-06/
│   ├── aula-07/
│   └── aula-08/
├── exemplos/
├── atividades/
├── projeto-integrador/
└── respostas/
```

### Descrição das pastas

- `apostila/`: versão atual da apostila;
- `aulas/`: materiais e códigos utilizados em cada encontro;
- `exemplos/`: exemplos demonstrados durante as aulas;
- `atividades/`: exercícios e práticas;
- `projeto-integrador/`: desenvolvimento do projeto final;
- `respostas/`: respostas comentadas, quando disponibilizadas.

---

## Como trabalhar em cada aula

A proposta da apostila segue três etapas:

### 1. Entenda

Leia o problema, a explicação e a analogia antes de executar qualquer comando.

### 2. Execute

Digite o comando no local indicado e compare o resultado obtido com o resultado esperado.

### 3. Refaça

Altere nomes, valores e estruturas para confirmar que você compreendeu o conceito.

> Não avance quando o resultado esperado não aparecer. Primeiro, leia a mensagem e investigue o erro.

---

## Preparação de um projeto TypeScript

Dentro da pasta do projeto, inicialize o npm:

```bash
npm init -y
```

Instale o TypeScript como dependência de desenvolvimento:

```bash
npm install typescript --save-dev
```

Crie o arquivo de configuração:

```bash
npx tsc --init
```

Uma configuração inicial pode utilizar:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src"]
}
```

Estrutura esperada:

```text
projeto/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── package-lock.json
└── tsconfig.json
```

Compile o projeto:

```bash
npx tsc
```

Execute o JavaScript gerado:

```bash
node dist/index.js
```

---

## O que significa `tsc`

`tsc` significa **TypeScript Compiler**.

Ele:

- lê arquivos `.ts`;
- verifica os tipos;
- gera arquivos JavaScript `.js`.

Fluxo:

```text
src/index.ts
      ↓
   npx tsc
      ↓
dist/index.js
      ↓
node dist/index.js
```

> Compilar não é executar. O `tsc` gera JavaScript; o Node.js executa esse JavaScript.

---

## Scripts npm

Os scripts podem ser adicionados ao `package.json`:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

Depois, execute:

```bash
npm run build
npm run start
```

---

## Projeto integrador

O projeto final será um **sistema acadêmico em TypeScript**.

Funcionalidades previstas:

- cadastrar aluno;
- registrar notas;
- calcular média;
- definir situação acadêmica;
- registrar último acesso com `Date`;
- trabalhar com JSON;
- salvar preferências;
- organizar o código com componentes e módulos;
- compilar e executar o projeto;
- apresentar a solução.

Estrutura sugerida:

```text
projeto-integrador/
├── src/
│   ├── tipos.ts
│   ├── calculos.ts
│   ├── armazenamento.ts
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

---

## Regras para as atividades

- Leia o enunciado completo antes de começar.
- Utilize os nomes de arquivos e pastas indicados.
- Execute os comandos no diretório correto.
- Salve os arquivos antes de testar.
- Leia a primeira mensagem de erro antes de alterar o código.
- Não envie a pasta `node_modules`.
- Organize o código com funções, componentes e módulos.
- Comente apenas quando o comentário realmente explicar algo relevante.

---

## Entrega das atividades

A forma de entrega será informada durante as aulas.

Quando a entrega ocorrer por Git:

```bash
git add .
git commit -m "Entrega da atividade"
git push
```

Antes de enviar, confirme:

- o projeto compila;
- não há erros no terminal;
- os arquivos estão organizados;
- `node_modules` não foi enviado;
- o `README.md` do projeto está atualizado;
- os comandos de execução funcionam.

---

## Arquivo `.gitignore`

Crie um arquivo `.gitignore` com:

```gitignore
node_modules/
dist/
.env
```

A pasta `dist` pode ser mantida no repositório apenas quando o professor solicitar.

---

## Referências principais

- TypeScript Documentation
- Node.js Documentation
- npm Documentation
- Visual Studio Code Documentation
- MDN Web Docs
- GitHub Docs

As referências completas e os vídeos recomendados estão disponíveis na apostila.

---

## Licença e uso acadêmico

Este material foi produzido para fins educacionais.

A reprodução, adaptação e distribuição devem respeitar a autoria do conteúdo e as regras institucionais aplicáveis.

**Autor:** Alexandre Carlos de Jesus

---

## Contato

Dúvidas sobre atividades, entregas e cronograma devem ser tratadas pelos canais oficiais da disciplina.
