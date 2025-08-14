# ---------- Stage 1: Build ----------
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files and install dependencies (including dev for build)
COPY package*.json ./
RUN npm install


# Copy the rest of the app
COPY . .

# ---------- Stage 2: Production ----------
FROM node:20-slim

# Set environment for production
ENV NODE_ENV=production

# Use non-root user from Node image
USER node

# Set working directory inside node's home
WORKDIR /home/node/app

# Copy only what’s needed for runtime
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app ./

# Document port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
