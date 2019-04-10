## To do:
# Add Dockerfile.dev
# Use Dockefile.dev in docker-compose
# Bookmark node_modules directory in docker-compose
# Change Dockerfile based on the project directory. Include nginx

# build stage
FROM node:10.14.2-alpine
ENV APP_ROOT /app
ARG API_URI=http://api.factly.in
ARG CLIENT_ID=factly-telugu
ARG DOMAIN_HOSTNAME=http://telugu.factly.in

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

# Primary command to run when the container starts
CMD ["npm", "start"]
