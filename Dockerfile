# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --force

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 dobdaGroup
RUN adduser --system --uid 1001 dobdaUser

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

COPY --from=builder --chown=dobdaUser:dobdaGroup /app/.next/standalone ./
COPY --from=builder --chown=dobdaUser:dobdaGroup /app/next.config.js ./
COPY --from=builder --chown=dobdaUser:dobdaGroup /app/.next/static ./.next/static

USER dobdaUser

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]