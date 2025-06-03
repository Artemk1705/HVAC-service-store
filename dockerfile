FROM node:18

WORKDIR /app

# Получаем аргумент сборки
ARG NEXT_PUBLIC_PROD_API

# Передаём его как переменную окружения
ENV NEXT_PUBLIC_PROD_API=${NEXT_PUBLIC_PROD_API}

COPY package*.json ./
RUN npm install

COPY . .

# Для отладки — временно покажем переменную
RUN echo "🔍 NEXT_PUBLIC_PROD_API=${NEXT_PUBLIC_PROD_API}"

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
