# apps/api/Dockerfile
FROM node:16

WORKDIR /usr/src/api

COPY ./apps/api/package.json ./apps/api/package-lock.json ./

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm config set fetch-retry-maxtimeout 600000

COPY ./apps/api .

RUN npm run build

CMD ["npm", "run", "start:prod"]
