FROM node:22-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install

USER node

RUN npm install @prisma/client

RUN npm run postinstall

RUN npx next telemetry disable

EXPOSE 3000

# If build exists, do not rerun the build stage

ENTRYPOINT [ "/bin/sh", "-c", "if [ -d .next ]; then npm run start; else npm run build && npm run start; fi" ]
# ENTRYPOINT [ "/bin/sh", "-c", "npm run build && npm run start" ]
# ENTRYPOINT [ "/bin/sh", "-c", "ls -al .next" ]
