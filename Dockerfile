FROM node:lts-alpine
RUN mkdir /db-status-service
WORKDIR /db-status-service
COPY . /db-status-service/
RUN npm i
EXPOSE 80
CMD [ "node",  "index.js" ]