#!/bin/bash

cd /srv/www/test || exit

echo "Fetching latest code..."
git fetch origin main
git reset --hard origin/main

echo "Installing dependencies..."
npm install

echo "Building the application..."
npm run build

echo "Restarting application with PM2..."
pm2 restart ecosystem.config.js --env production
