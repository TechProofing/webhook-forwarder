FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install nano and curl
RUN apt-get update && apt-get install -y \
    nano \
    curl \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*


# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "node", "index.js" ]