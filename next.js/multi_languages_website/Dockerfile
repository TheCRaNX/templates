# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the app files
COPY . .

# Build the Next.js app for production
#RUN npm run build

# Expose the port that your app runs on (default is 3000)
EXPOSE 3000

# Command to run the app in production mode
CMD [ "npm", "start" ]