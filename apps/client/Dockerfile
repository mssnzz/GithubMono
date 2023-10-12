# apps/client/Dockerfile
FROM node:16

WORKDIR /usr/src/client

COPY ./apps/client/package.json ./apps/client/package-lock.json ./

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm config set fetch-retry-maxtimeout 600000

COPY ./apps/client .

RUN npm run build

CMD ["npm", "start"]
