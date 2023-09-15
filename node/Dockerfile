FROM node:15

WORKDIR /usr/src/app

RUN npm install --save express

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .
RUN npm install --quiet && mv node_modules ../ && ln -sf ../node_modules node_modules

EXPOSE 3000


###CMD [ "node", "index.js" ]
