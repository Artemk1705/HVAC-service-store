FROM node:18

WORKDIR /app

# Копируем и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходники
COPY . .

# Сборка
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
