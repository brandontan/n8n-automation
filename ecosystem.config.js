module.exports = {
  apps: [{
    name: 'n8n-twitter-bot',
    script: './node_modules/n8n/bin/n8n',
    args: 'start',
    env: {
      N8N_ENCRYPTION_KEY: 'a-random-string-for-encryption-purposes-12345',
      N8N_LOG_LEVEL: 'debug',
      N8N_PORT: 5678,
      N8N_RUNNERS_ENABLED: 'true',
      N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: 'true',
      PATH: process.env.PATH + ':' + process.cwd() + '/node_modules/.bin'
    },
    watch: false,
    autorestart: true,
    max_restarts: 10,
    restart_delay: 3000
  }]
};

