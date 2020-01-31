FROM node:10.16.0-alpine
WORKDIR /usr/www/app
COPY /dist/bundle.js .
CMD 'mkdir -p public'
COPY public ./public
WORKDIR /usr/www/app
EXPOSE 3000:3000
CMD ["node", "bundle.js"]