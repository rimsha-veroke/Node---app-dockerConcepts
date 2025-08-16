# ---------- Build Stage ----------
FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Copy package.json and lock file first for better caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Build the app (if you have a build step, e.g. React/TypeScript)
RUN npm run build || echo "no build step"

# ---------- Runtime Stage ----------
# Use distroless Node.js for minimal & secure runtime
FROM gcr.io/distroless/nodejs20:nonroot

# Set working directory
WORKDIR /app

# Copy only necessary files from build stage
COPY --from=build /app ./

# Run as non-root (already enforced by distroless:nonroot)
USER nonroot

# Expose app port
EXPOSE 3000

# Start the app
CMD ["app.js"]
