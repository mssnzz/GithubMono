# apps/api/Dockerfile
FROM node:14

WORKDIR /usr/src/api

COPY ./apps/api/package.json ./apps/api/package-lock.json ./

RUN npm install

COPY ./apps/api .

RUN npm run build

CMD ["npm", "run", "start:prod"]
