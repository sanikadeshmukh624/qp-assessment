# Use the official Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Set environment variables (Optional, better to use .env in production)
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]
