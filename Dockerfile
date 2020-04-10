## To do:
# Add Dockerfile.dev
# Use Dockefile.dev in docker-compose
# Bookmark node_modules directory in docker-compose
# Change Dockerfile based on the project directory. Include nginx

# build stage
FROM node:12.16-alpine
WORKDIR /app

# install node modules
COPY ./package.json ./
RUN npm install

# set build time variable
ENV API_URI=https://api.degacms.com/query
ENV CLIENT_ID=factly
ENV DOMAIN_HOSTNAME=https://telugu.factly.in
ENV DEFAULT_LANG=en

# copy source files to image and build
COPY . .

RUN npm audit fix

RUN npm run build



# give full external access to the app container
ENV HOST 0.0.0.0

EXPOSE 3000

# Primary command to run when the container starts
CMD ["npm", "start"]
