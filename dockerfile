FROM node:18

WORKDIR /app


ARG NEXT_PUBLIC_PROD_API


ENV NEXT_PUBLIC_PROD_API=${NEXT_PUBLIC_PROD_API}

COPY package*.json ./
RUN npm install

COPY . .


RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
