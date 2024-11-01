module.exports = {
  apps: [
    {
      name: "benrdev",
      script: "npm run start",
      instances: "max",
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules", ".next", ".git", ".astro", ".vscode"],
      max_memory_restart: "1G",
      cwd: "/srv/www/test",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
