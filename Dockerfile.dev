FROM nomorechokedboy/node:14-deps as deps

FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=deps --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

CMD ["yarn", "dev"]