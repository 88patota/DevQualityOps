# Projeto Backend - Veiculos API (Node)
Este é o backend da aplicação de gerenciamento de veículos, desenvolvido usando Node.js e Express.

Instalação
Certifique-se de ter o Node.js instalado. Baixe a versão mais recente em https://nodejs.org/.

Clone este repositório:
```bash
git clone https://github.com/seu-usuario/veiculos-api.git
```

Navegue até o diretório do projeto:
```bash
cd veiculos-api
```
Instale as dependências:
```bash
npm install
``` 

# Configuração do Banco de Dados

Linux (Ubuntu):

```bash
Copy code
# Atualize a lista de pacotes
sudo apt update
```

# Instale o PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib
```

MacOS:

```bash
Copy code
# Instale o Homebrew (se ainda não estiver instalado)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instale o PostgreSQL com o Homebrew
brew install postgresql
```
Windows:

Baixe o instalador do PostgreSQL para Windows no site oficial.

Execute o instalador baixado e siga as instruções na tela para concluir a instalação.

Após a instalação do PostgreSQL, você pode prosseguir com a criação do banco de dados e configuração das variáveis de ambiente, conforme mencionado nas instruções do projeto backend no README.

Certifique-se de que o PostgreSQL esteja em execução antes de iniciar o backend. Você pode iniciar o PostgreSQL manualmente ou configurá-lo para iniciar automaticamente com o sistema operacional.

Certifique-se de ter o PostgreSQL instalado e configurado.

### Crie um banco de dados chamado *veiculos_db*.

Configure as variáveis de ambiente para a conexão com o banco de dados. Crie um arquivo .env na raiz do projeto e adicione as seguintes configurações:

```bash
env
DB_HOST=seu-host
DB_PORT=sua-porta
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=veiculos_db
```
Execução
Inicie o servidor:

```bash
npm start
```
O servidor estará em execução em http://localhost:4000.

# Projeto Frontend (React)

Projeto Frontend - Veiculos App
Este é o frontend da aplicação de gerenciamento de veículos, desenvolvido usando React.

Instalação
Certifique-se de ter o Node.js instalado. Baixe a versão mais recente em https://nodejs.org/.

Navegue até o diretório do projeto:

```bash
cd veiculos-app
```

Instale as dependências:
```bash
npm install
```
Configuração da API
Abra o arquivo src/App.js e certifique-se de que a URL da API está correta. Por padrão, está configurada para http://localhost:3000. Ajuste conforme necessário.

```jsx
const apiURL = 'http://localhost:4000';
```
Execução
Inicie o aplicativo React:

```bash
npm start
```
O aplicativo estará em execução em http://localhost:3000.

Acesso à Aplicação
Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.