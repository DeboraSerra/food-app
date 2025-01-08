FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD if [ "$$NODE_ENV" = "production" ] ; then npm run build && npm start ; else npm run dev ; fi
