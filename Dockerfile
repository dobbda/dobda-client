FROM node:14
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ENV CONTINUOUS_INTEGRATION=1
# ENV NODE_ENV=production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --chown=node:node .next .next
COPY --chown=node:node public public

EXPOSE 3000
CMD [ "npm", "start" ]
