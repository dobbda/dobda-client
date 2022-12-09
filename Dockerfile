# Base Layer
FROM node:16-alpine AS base
WORKDIR /app

COPY package*.json ./
COPY next.config.js ./

RUN npm ci --force
COPY . .

#==================================================
# Build Layer
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build

COPY --from=base /app ./
COPY next.config.js ./
RUN npm run build

# ==================================================
# Package install Layer
FROM node:16-alpine AS node_modules
WORKDIR /modules
COPY next.config.js ./
COPY package*.json ./
RUN npm install --force --only=production && npm cache clean --force

# ==================================================
# Production Run Layer
FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package.json ./
COPY next.config.js ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
COPY --from=node_modules /modules/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
