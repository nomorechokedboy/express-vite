FROM node:14-alpine as deps

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn --pure-lockfile 

FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build && yarn --prod --ignore-scripts --prefer-offline

FROM node:14-alpine

WORKDIR /usr/src/app

RUN yarn global add pm2

COPY --chown=node:node --from=builder /usr/src/app/build ./build
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=builder /usr/src/app/ecosystem.config.js ./ecosystem.config.js

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
