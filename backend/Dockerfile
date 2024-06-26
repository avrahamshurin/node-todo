FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run ${NODE_ENV}"]