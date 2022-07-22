module.exports = {
  apps: [
    {
      name: 'slearning-service',
      script: 'yarn',
      args: 'start',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      interpreter: '/bin/sh',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
