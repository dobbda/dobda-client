FROM node:14-alpine as builder
RUN mkdir /app
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app/

EXPOSE 3000
CMD [ "npm", "start" ]
