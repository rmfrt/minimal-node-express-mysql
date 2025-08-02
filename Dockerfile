# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies to reduce image size
RUN npm install --production

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
