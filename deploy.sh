#!/bin/bash
cd /srv/www/test
git pull
yarn install
yarn build
pm2 restart ecosystem.config.js
