#!/bin/bash
# Start Jekyll server in Docker container
# This avoids local SSL certificate issues by using Docker's environment

echo "Starting Jekyll in Docker container..."
echo "The site will be available at http://localhost:4001"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

docker-compose up
