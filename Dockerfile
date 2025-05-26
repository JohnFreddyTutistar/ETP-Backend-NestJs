# Usa Node como base
FROM node:18-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
COPY dist ./dist
COPY .env ./

# Instalar solo dependencias de producción
RUN npm install --only=production

# Exponer el puerto del backend
EXPOSE 3000

# Comando de inicio
CMD ["node", "dist/main"]