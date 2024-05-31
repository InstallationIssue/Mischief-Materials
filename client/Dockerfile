FROM node:22-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

RUN npm install @prisma/client

RUN npm run postinstall

RUN npm run build

EXPOSE 3000

CMD npm run start

#CMD [ "node", "app.js" ]

# docker build -t rits-client .