# dega-web

> Website template for Dega

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Using Docker to run the production build of Dega Web

Run the following command from the root folder to build for production and start Dega Web in a docker container.

```
docker-compose build && docker-compose up -d
```

You should be able to access the website on: http://localhost:8000

Run the following command from the root folder to stop and remove the container:

```
docker-compose down
```
