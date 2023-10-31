# Dockerfile para o backend
FROM node:18-slim

WORKDIR /home/node/app

COPY . .

RUN yarn install

EXPOSE 5435

CMD ["yarn", "dev"]
