# apps/client/Dockerfile
FROM node:14

WORKDIR /usr/src/client

COPY ./apps/client/package.json ./apps/client/package-lock.json ./

RUN npm install

COPY ./apps/client .

RUN npm run build

CMD ["npm", "start"]
