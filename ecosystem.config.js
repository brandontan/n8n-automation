module.exports = {
  apps: [{
    name: 'n8n-twitter-bot',
    script: 'node_modules/n8n/bin/n8n',
    env: {
      N8N_ENCRYPTION_KEY: "auto-generated-key-please-change",
      N8N_HOST: "localhost",
      N8N_PORT: "5678",
      N8N_PROTOCOL: "http",
      N8N_USER_FOLDER: "/Users/brtan/.n8n",
      N8N_PATH: "/",
      N8N_DIAGNOSTICS_ENABLED: "false",
      N8N_BASIC_AUTH_ACTIVE: "false",
      N8N_LOG_LEVEL: "debug",
      N8N_TIMEZONE: "UTC",
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      TWITTER_API_KEY_1: process.env.TWITTER_API_KEY_1,
      TWITTER_API_SECRET_1: process.env.TWITTER_API_SECRET_1,
      TWITTER_ACCESS_TOKEN_1: process.env.TWITTER_ACCESS_TOKEN_1,
      TWITTER_ACCESS_SECRET_1: process.env.TWITTER_ACCESS_SECRET_1,
      TWITTER_ACCOUNT_NAME_1: process.env.TWITTER_ACCOUNT_NAME_1,
      MIDJOURNEY_API_KEY: process.env.MIDJOURNEY_API_KEY,
      MIDJOURNEY_DISCORD_WEBHOOK: process.env.MIDJOURNEY_DISCORD_WEBHOOK
    }
  }]
};
