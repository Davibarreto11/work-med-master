# Dockerfile
FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
