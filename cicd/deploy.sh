#!/usr/bin/env bash

echo "Starting Logging into Docker"
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
echo "Logged into Docker"
echo "Logged into Docker"
docker push $IMAGE
echo "Image pushed to Docker Hub: {$IMAGE}"
