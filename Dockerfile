FROM node:latest

WORKDIR website_front

RUN apt-get update \
    && apt-get install -y 

RUN rm -rf yarn.lock node_modules **/node_modules
RUN yarn set version berry
RUN touch yarn.lock
RUN yarn set version latest
RUN yarn install