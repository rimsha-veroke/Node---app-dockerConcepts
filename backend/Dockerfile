# ---------- Stage 1: Builder ----------
FROM node:20.19.0-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# ---------- Stage 2: Production ----------
FROM gcr.io/distroless/nodejs20-debian12

# Workdir inside container
WORKDIR /app

# Copy app and dependencies from builder
COPY --from=builder /app /app

# Drop root privileges automatically (distroless does this by default)
USER nonroot

# Expose app port
EXPOSE 3000

# Start the app
CMD ["server.js"]
