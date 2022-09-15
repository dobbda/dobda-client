# Base Layer
FROM node:14-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

#==================================================
# Build Layer
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build

COPY --from=base /app ./
RUN npm run build

# ==================================================
# Package install Layer
FROM node:14-alpine AS node_modules

WORKDIR /modules

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# ==================================================
# Production Run Layer
FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
COPY --from=node_modules /modules/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
