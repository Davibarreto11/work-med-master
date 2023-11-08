# Use uma imagem Node.js como base
FROM node:20

WORKDIR /src

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY ./frontend/package*.json ./

# Instale as dependências do aplicativo
RUN yarn

# Copie todo o código-fonte do aplicativo para o contêiner
COPY ./frontend ./

# Expõe a porta 3000 em que o aplicativo React será executado
EXPOSE 3000

# Inicie o aplicativo React
CMD ["yarn", "start"]