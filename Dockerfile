# build environment
FROM node:14.15.4-alpine3.10 as build

RUN apk update

RUN mkdir /code
WORKDIR /code

ENV REACT_APP_BUILD_ENV='development'

COPY . ./

CMD ["npm", "start"]