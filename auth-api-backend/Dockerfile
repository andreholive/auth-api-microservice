FROM node:lts

WORKDIR /usr/auth-api-backend

EXPOSE 5000

COPY package.json /usr/auth-api-backend/package.json
COPY package-lock.json /usr/auth-api-backend/package-lock.json
RUN npm ci

COPY . /usr/auth-api-backend

CMD ["npm", "start"]