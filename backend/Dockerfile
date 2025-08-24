FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine as production

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy build artifacts from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/.env* ./

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start:prod"]
