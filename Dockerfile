FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install && npm run search-seed

EXPOSE 3005

CMD [ "npm", "start" ]