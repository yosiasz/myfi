# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
CMD ["npm run dev"]
EXPOSE 3000