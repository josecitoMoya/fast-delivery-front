# Establecer la imagen base con Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app


# Copiar el package.json y package-lock.json a /app en el contenedor
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto del código fuente a /app en el contenedor
COPY . .

# Compilar la aplicación (si es necesario)
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación Next.js
EXPOSE 3000

# Iniciar la aplicación Next.js
CMD ["npm", "start"]