FROM node:18

WORKDIR /var/www/BlogAppPractice

COPY . .

WORKDIR /var/www/BlogAppPractice/FRONTEND
RUN npm i
RUN npm run build

WORKDIR /var/www/BlogAppPractice/BACKEND
RUN npm i

EXPOSE 3001

CMD ["node", "app.js"]