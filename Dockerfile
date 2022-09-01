FROM node:14-alpine as builder
WORKDIR /app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
