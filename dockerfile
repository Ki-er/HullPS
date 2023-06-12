FROM node:20.3.0
RUN mkdir -p /usr/hullps/src
WORKDIR /usr/hullps/src
COPY package.json /usr/hullps/src
RUN npm install
COPY . /usr/hullps/src
CMD ["node", "src/index.js"]
