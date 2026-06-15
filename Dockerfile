FROM node:20-alpine

# Definir diretório de trabalho no container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código do projeto
COPY . .

# Expor a porta que a aplicação está escutando
EXPOSE 3333

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
