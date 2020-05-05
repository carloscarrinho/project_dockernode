FROM node:alpine

COPY package*.json /var/www/

WORKDIR /var/www/
RUN ["npm", "install"]

COPY . /var/www/

ENTRYPOINT ["npm", "start"]

EXPOSE 3000