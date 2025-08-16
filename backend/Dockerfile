# ---------- Stage 1: Builder ----------
FROM node:20.19.0-slim AS builder

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install all dependencies (dev + prod)
# instead of npm ci
RUN npm install


# Copy the rest of the source code
COPY . .

# If you have a build step (TypeScript, bundlers, etc.)
RUN npm run build || echo "no build step"

# Remove devDependencies to keep runtime lean
RUN npm prune --omit=dev

# ---------- Stage 2: Production ----------
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

# Copy only the app and production dependencies
COPY --from=builder /app /app

# Run as nonroot (distroless defaults to this)
USER nonroot

# Expose app port
EXPOSE 3000

# Start the app
CMD ["server.js"]
