## To do:
# Add Dockerfile.dev
# Use Dockefile.dev in docker-compose
# Bookmark node_modules directory in docker-compose
# Change Dockerfile based on the project directory. Include nginx

# build stage
FROM node:10.14.2-alpine
ENV APP_ROOT /app

ARG API_URI=https://api.degacms.com
ARG CLIENT_ID=factly
ARG DOMAIN_HOSTNAME=https://telugu.factly.in
ARG DEFAULT_LANG=en
ARG USER_MODULE=false
ARG OAUTH_CLIENT_ID=dega-web
ARG OAUTH_CLIENT_SECRET=nuxt-test
ARG OAUTH_HOST=https://login.factly.in/auth/realms/Test/protocol/openid-connect/
ARG AUTHORIZATION_ENDPOINT=https://login.factly.in/auth/realms/Test/protocol/openid-connect/auth
ARG LOGOUT_ENDPOINT=https://login.factly.in/auth/realms/Test/protocol/openid-connect/logout
ARG ACCESS_TOKEN_ENDPOINT=https://login.factly.in/auth/realms/Test/protocol/openid-connect/token
ARG USER_DATA_API_URI=http://localhost:8081/api/v1
ARG USERINFO_ENDPOINT=http://localhost:8081/api/v1/user/info

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
