# ---------- Stage 1: Build ----------
FROM node:20-slim AS builder

# Install security updates + clean apt cache
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# ---------- Stage 2: Production ----------
FROM node:20-slim

# Apply latest security patches
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

USER node
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
