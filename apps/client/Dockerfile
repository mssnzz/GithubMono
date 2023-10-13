# apps/client/Dockerfile
FROM node:16

WORKDIR /usr/src/client

# Copia los archivos de configuración de paquetes
COPY ./apps/client/package.json ./package.json
COPY ./apps/client/package-lock.json ./package-lock.json

# Instala las dependencias
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm config set fetch-retry-maxtimeout 600000

# Copia el código fuente del cliente
COPY ./apps/client .

# Compila la aplicación del cliente
RUN npm run build

# Comando para ejecutar el cliente
CMD ["npm", "start"]
