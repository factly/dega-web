#!/usr/bin/env bash

echo "Starting Logging into Docker"
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
echo "Logged into Docker"
docker push $IMAGE
echo "Image pushed to Docker Hub: {$IMAGE}"
