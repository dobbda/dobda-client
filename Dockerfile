FROM node:14

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
# ENV CONTINUOUS_INTEGRATION=1
# ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci
COPY --chown=node:node .next .next
COPY --chown=node:node public public

EXPOSE 3000
CMD [ "npm", "start" ]
