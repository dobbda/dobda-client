FROM node:14
LABEL AUTHOR SHIN_HYEOK KIM (seungkyua@gmail.com)
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm build

EXPOSE 3000
CMD [ "npm", "start" ]