#!/bin/bash

# Script to copy .env.example files to .env files for backend and frontend

# Define project root directory (current directory)
PROJECT_ROOT=$(pwd)

# Function to copy .env.example to .env
copy_env_file() {
    local dir=$1
    local dir_name=$(basename "$dir")

    echo "Setting up environment for $dir_name..."

    if [ -f "$dir/.env.example" ]; then
        cp "$dir/.env.example" "$dir/.env"
        echo "✅ Copied $dir/.env.example to $dir/.env"
    else
        echo "❌ Error: $dir/.env.example does not exist"
    fi
}

# Copy .env files for backend and frontend
copy_env_file "$PROJECT_ROOT/backend"
copy_env_file "$PROJECT_ROOT/frontend"

echo "Environment setup complete!"
