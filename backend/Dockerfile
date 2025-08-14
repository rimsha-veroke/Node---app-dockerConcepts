# ---------- Stage 1: Build ----------
FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# ---------- Stage 2: Production ----------
FROM node:20-slim

ENV NODE_ENV=production

USER node
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
