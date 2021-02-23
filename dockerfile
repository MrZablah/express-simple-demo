## NodeJS

# Specify a base image
FROM node:10-alpine

# Create a folder to save copy files and cd to it
WORKDIR /usr/app

# Copy required file for dependencies to container
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Default command
CMD [ "npm", "start" ]
