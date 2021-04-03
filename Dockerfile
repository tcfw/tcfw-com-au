FROM node as builder

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn run build

FROM nginx

COPY --from=builder dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf