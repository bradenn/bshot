FROM node:10

COPY . .

RUN npm install

CMD ["node", "-r", "esm", "src/index.js"]
