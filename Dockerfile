FROM node:18

RUN apt update -y && apt upgrade -y

WORKDIR /front
USER node

RUN yarn global add  npm-check-updates


ENV HOST 0.0.0.0
