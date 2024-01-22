# Use uma imagem base do Node.js
FROM node:14

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de dependências do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Configurações do banco de dados PostgreSQL
ENV DB_HOST=docker.for.mac.localhost
ENV DB_PORT=5432
ENV DB_USER=erikpatekoski
ENV DB_PASSWORD=102030
ENV DB_DATABASE=veiculos

# Exponha a porta em que o aplicativo está sendo executado
EXPOSE 4000

# Comando para iniciar o aplicativo
CMD ["node", "index.js"]
