## To do:
# Add Dockerfile.dev
# Use Dockefile.dev in docker-compose
# Bookmark node_modules directory in docker-compose
# Change Dockerfile based on the project directory. Include nginx

# build stage
FROM node:10.14.2-alpine
ENV APP_ROOT /app
ARG API_URI=http://localhost:8000
ARG CLIENT_ID=factly

# create and setup working directory
RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

# install node modules
COPY ./package.json ${APP_ROOT}
RUN npm install

# copy source files to image and build
COPY . ${APP_ROOT}
RUN npm run build

# give full external access to the app container
ENV HOST 0.0.0.0
