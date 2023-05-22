# Imagen base
FROM node:18-buster

# Directorio de trabajo dentro del contenedor
WORKDIR /app

COPY . .
# Instalar el paquete CLI de Nest.js
RUN yarn global add @nestjs/cli
# Instalar @prisma/client
RUN yarn add @prisma/client

RUN yarn install 

# Copiar los archivos necesarios al contenedor

# Instalar las dependencias

# Instalar dependencias adicionales

# Copiar el código fuente de la aplicación


COPY prisma/ ./prisma/


# Compilar la aplicación
RUN nest build

RUN npx prisma generate
RUN npx prisma migrate deploy

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start:dev"]