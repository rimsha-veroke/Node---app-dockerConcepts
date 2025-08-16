# Stage 1: Build dependencies
FROM node:20.19.4-trixie-slim AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Stage 2: Run the app
FROM node:20.19.4-trixie-slim

WORKDIR /app
USER node

# Copy node_modules from builder stage
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app ./

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
