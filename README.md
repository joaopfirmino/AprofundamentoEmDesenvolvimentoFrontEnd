# AprofundamentoEmDesenvolvimentoFrontEnd
# 📚 Catálogo de Livros (LivrosAngular)

Aplicação web de catálogo de livros feita com **Angular**, desenvolvida como projeto da disciplina **Aprofundamento em Desenvolvimento Front-End**.

Com ela é possível **listar**, **cadastrar** e **excluir** livros, navegando entre as telas por um menu superior.

---

## 🎯 Objetivos do projeto

- Implementar **serviços injetáveis** do Angular, usando TypeScript
- Implementar **componentes** com TypeScript e templates HTML
- Utilizar a biblioteca de **formulários** do Angular (`FormsModule`)
- Implementar a **navegação interna** (rotas) do front-end

---

## ✨ Funcionalidades

| Tela | Rota | O que faz |
| --- | --- | --- |
| Catálogo | `/lista` | Mostra uma tabela com título, resumo, editora e autores de cada livro, e permite excluir livros |
| Novo livro | `/dados` | Formulário para cadastrar um livro (título, resumo, editora e autores) |
- A rota padrão (`/`) redireciona para o catálogo.
- No cadastro, o **título** e a **editora** são obrigatórios (validação do HTML 5).
- Os autores são digitados **um por linha** na caixa de texto.

---

## 🛠️ Tecnologias

- Angular
- TypeScript
- HTML e CSS
- Bootstrap 5 (via CDN)

---

## ▶️ Como executar

### Pré-requisitos

- Node.js (versão LTS)
- Angular CLI:
    
    ```bash
    npm install -g @angular/cli
    ```
    

### Passo a passo

```bash
# 1. Clonar o repositório
git clone <URL-DO-REPOSITORIO>

# 2. Entrar na pasta do projeto
cd livros-angular

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
ng serve
```

Depois, abra no navegador: **http://localhost:4200**

---

## 🗂️ Estrutura do projeto

```
src/
├── index.html                      → página base (inclui o Bootstrap)
├── styles.css                      → estilos globais
└── app/
    ├── editora.ts                  → classe Editora (modelo de dados)
    ├── livro.ts                    → classe Livro (modelo de dados)
    ├── controle-editora.service.ts → serviço com a lista de editoras
    ├── controle-livros.service.ts  → serviço com a lista de livros
    ├── livro-lista/                → componente da tela de catálogo
    ├── livro-dados/                → componente da tela de cadastro
    ├── app-routing-module.ts       → definição das rotas
    └── app-module.ts               → módulo principal da aplicação
```

---

## 🧠 Como funciona

### Modelos (classes)

- **`Editora`**: possui `codEditora` (número) e `nome` (texto).
- **`Livro`**: possui `codigo`, `codEditora`, `titulo`, `resumo` e `autores` (vetor de textos).

### Serviços

Os serviços guardam os dados e a lógica, e são **injetados** nos componentes pelo construtor (injeção de dependência).

- **`ControleEditoraService`**
    - `getEditoras()`: devolve a lista de editoras
    - `getNomeEditora(codEditora)`: devolve o nome da editora, usando `filter`
- **`ControleLivrosService`**
    - `obterLivros()`: devolve a lista de livros
    - `incluir(livro)`: define o código como o maior código existente + 1 e adiciona o livro
    - `excluir(codigo)`: localiza o livro com `findIndex` e o remove com `splice`

### Componentes

- **`LivroListaComponent`**: carrega livros e editoras no `ngOnInit` e exibe a tabela com `ngFor`. Possui os métodos `excluir` e `obterNome`.
- **`LivroDadosComponent`**: formulário ligado ao objeto `livro` com `[(ngModel)]`. Ao enviar, converte os autores em vetor com `split`, inclui o livro e navega de volta para `/lista`.

### Navegação

O menu usa `routerLink` para trocar de tela sem recarregar a página, e o `<router-outlet>` exibe o componente da rota atual.

---

## ⚠️ Observação

Os dados ficam **apenas na memória** do navegador (dentro dos serviços). Ao recarregar a página, os livros cadastrados ou excluídos voltam ao estado inicial. Não há banco de dados nem back-end neste projeto.

---

## 👤 Autor

**João Pedro**
Projeto acadêmico, disciplina de Aprofundamento em Desenvolvimento Front-End.
