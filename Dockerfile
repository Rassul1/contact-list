FROM node:14

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --development

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]