module.exports = {
  apps: [
    {
      name: "benrdev",
      script: "./server/entry.mjs",
      instances: "1",
      exec_mode : "cluster",
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules", ".next", ".git", ".astro", ".vscode"],
      max_memory_restart: "3G",
      cwd: "/srv/www/benrdev",
      env: {
        NODE_ENV: "development",
        HOST: '0.0.0.0',
        PORT: 3000
      }
    },
  ],
};
