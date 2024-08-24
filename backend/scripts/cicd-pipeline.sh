#!/bin/bash
# Jenkins CI/CD pipeline script

# Build the Docker images for each service
for SERVICE in "auth game-management payment social"
do
    cd "/Users/willz/Desktop/Spinz3/services/$SERVICE"
    docker build -t your-docker-repo/$SERVICE-service:latest .
done

# Deploy to Kubernetes
kubectl apply -f "/Users/willz/Desktop/Spinz3/services/auth/k8s/deployment.yaml"
