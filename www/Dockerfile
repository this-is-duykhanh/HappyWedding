FROM node:20-bullseye-slim@sha256:d53d277d135f4b383cab9ae0b268447325f08b1216f62d6ce0f46ae005d47192 AS development
# FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./


RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

ENV REACT_APP_API_URL=http://localhost/api


CMD ["npm", "start"]