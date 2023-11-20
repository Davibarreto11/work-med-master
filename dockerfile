# Dockerfile
FROM node:20

WORKDIR /src

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
