# apps/api/Dockerfile
FROM node:16

WORKDIR /usr/src/api

# Copia los archivos de configuración de paquetes
COPY ./apps/api/package.json ./package.json
COPY ./apps/api/package-lock.json ./package-lock.json

# Instala las dependencias
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm config set fetch-retry-maxtimeout 600000

# Copia el código fuente de la API
COPY ./apps/api .

# Compila la aplicación
RUN npm run build

# Comando para ejecutar la API en producción
CMD ["npm", "run", "start:prod"]
