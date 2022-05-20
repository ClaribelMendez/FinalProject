
   
FROM node:16.14.0

WORKDIR /client
ADD client ./
RUN npm install
RUN npm run build

WORKDIR /server
ADD server ./
RUN npm install
CMD node server.js