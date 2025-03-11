# Base image to use
FROM node:latest

# set a working directory
WORKDIR /backend


# Copy across project configuration information
# Install application dependencies
COPY backend/package*.json /backend/


# Ask npm to install the dependencies
RUN npm install -g supervisor && npm install && npm install supervisor

# Copy across all our files
COPY . /src

# Expose our application port (3000)
EXPOSE 3000


