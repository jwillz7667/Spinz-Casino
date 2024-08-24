# services/game-management/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port that the application will run on
EXPOSE 3001

# Define environment variables (you can override these in the Kubernetes deployment)
ENV NODE_ENV=production
ENV MONGO_URI=mongodb://your-mongo-db-host:27017/games

# Start the application
CMD ["node", "index.js"]
