#!/bin/bash

cd /srv/www/test || exit

echo "Fetching latest code..."
git fetch origin main
git reset --hard origin/main

echo "Installing dependencies..."
npm i pnpm -g
pnpm install

echo "Building the application..."
pnpm run build

echo "Restarting application with PM2..."
pm2 restart ecosystem.config.js --env production
