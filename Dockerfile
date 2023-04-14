FROM node

WORKDIR /src/usr

COPY . .

EXPOSE 4000

RUN npm i

CMD [ "npm", "start" ]