FROM node:latest

RUN mkdir /src
WORKDIR /src
ADD app/server.js /src/server.js
ADD app/package.json /src/package.json

RUN npm install

EXPOSE 8080

CMD node server.js
