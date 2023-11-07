FROM node:18-slim

WORKDIR /home/node/app

COPY . .

RUN yarn install

EXPOSE 3333

CMD ["yarn", "dev"]