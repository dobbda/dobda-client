FROM node:14 AS builder

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
# ENV CONTINUOUS_INTEGRATION=1
# ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci

ARG user=nextjs
ARG group=nodejs
ARG usergroup=${user}:${group}
RUN adduser -u 1001 -S ${user}
RUN addgroup -g 1001 -S ${group}

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=${usergroup} /app/.next ./.next

USER ${user}

EXPOSE 3000
CMD [ "npm", "start" ]
