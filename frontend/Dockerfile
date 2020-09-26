# Stage 1
FROM node:14.4.0-alpine as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN GENERATE_SOURCEMAP=false REACT_APP_IS_PRODUCTION=true ./node_modules/.bin/react-scripts --expose-gc --max-old-space-size=12288 build

# Stage 2 - the production environment
FROM nginx:1.16.0-alpine
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]