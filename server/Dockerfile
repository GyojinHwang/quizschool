FROM node:14.14.0-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g
RUN npm install ts-node -g 
RUN pm2 install typescript

# CMD ["npm", "run", "dev"]
<<<<<<< HEAD
#CMD ["pm2", "start", "src/server.ts", "--watch"]
CMD ["npm", "run", "start:production"]
=======
CMD ["pm2", "start", "src/server.ts", "--watch"]

>>>>>>> 63a9535 (initial)
# CMD ["pm2", "start", "ecosystem.config.js", "--env", "production", "--watch"]

# CMD ["npm", "run", "dev"]