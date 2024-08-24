# services/payment/Dockerfile

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
EXPOSE 3002

# Define environment variables (you can override these in the Kubernetes deployment)
ENV NODE_ENV=production
ENV STRIPE_SECRET_KEY=your_stripe_secret_key
ENV DB_CONNECTION_STRING=postgres://jwilly:killa123@your-db-host:5432/resflow

# Start the application
CMD ["node", "index.js"]
