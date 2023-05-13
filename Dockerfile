FROM node:19

RUN apt update -y && apt upgrade -y
RUN npm install -g npm

WORKDIR /front
USER node

RUN yarn global add  npm-check-updates


ENV HOST 0.0.0.0
