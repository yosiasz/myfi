# syntax=docker/dockerfile:1
   
#FROM node:18-alpine
FROM node:latest
#WORKDIR /usr/local/share/ca-certificates
#RUN curl -ks 'https://cert.host.server/ssl_certs/EnterpriseRootCA.crt' -o '/usr/local/share/ca-certificates/EnterpriseRootCA.crt'
#COPY .docker/zscaler.cer /usr/local/share/ca-certificates/
#COPY .docker/mcc-ca.pem /usr/local/share/ca-certificates/mcc-ca.crt
#COPY .docker/mcc-ca.pem /usr/local/share/ca-certificates/
#RUN /usr/sbin/update-ca-certificates
#ADD .docker/mcc-ca.pem /usr/local/share/ca-certificates/mcc-ca.crt
COPY .docker/mcc-ca.pem /usr/local/share/ca-certificates/
USER root
RUN update-ca-certificates
RUN yarn config set enableStrictSsl false
RUN apt update
#RUN cat /usr/local/share/ca-certificates/mcc-ca.crt >> /etc/ssl/certs/ca-certificates.crt 
#RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

#RUN apk --no-cache add ca-certificates \
#    && rm -rf /var/cache/apk/*

#RUN update-ca-certificates
#RUN apk --no-cache add curl

#COPY mcc-ca.crt /usr/share/ca-certificates/
#RUN echo mcc-ca.crt >> /etc/ca-certificates.conf
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
CMD ["npm run dev"]
EXPOSE 5173