module.exports = {
  apps: [{
    name: "benrdev",
    script: "yarn",
    args: "start",
    cwd: "/srv/www/test",
    watch: true,
    ignore_watch: ["node_modules", ".next"],
    env: {
      NODE_ENV: "production",
    }
  }]
};