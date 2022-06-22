FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY ./ .

EXPOSE 3000
CMD ["yarn", "start"]