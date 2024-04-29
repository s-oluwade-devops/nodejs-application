FROM node:10
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9981
CMD ["node","app.js"]
