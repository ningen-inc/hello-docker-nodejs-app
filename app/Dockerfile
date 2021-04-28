FROM node:12
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y \
netcat \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 3000
CMD ["node","server.js"]
