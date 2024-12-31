# Use Node.js as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies for the entire project
RUN npm install

# Copy all project files into the container
COPY . .

# Install Firebase CLI globally
RUN npm install -g firebase-tools

# Change to the client directory and install frontend dependencies
WORKDIR /app/client
RUN npm install
RUN npm run build

# Move back to the root directory
WORKDIR /app

WORKDIR /app/client/functions
RUN npm install

# Expose ports for frontend (3000) and backend (5001)
EXPOSE 3000 5001

# Set environment variables for Firebase to use


# Command to start Firebase server and serve frontend
CMD ["sh", "-c", "cd /app/server/functions && npm run serve & cd /app/client && npm run start"]
