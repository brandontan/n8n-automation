#!/bin/bash
echo "Checking N8N status..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:5678 then
    echo "✓ N8N is running"
    if [ -f ~/.n8n/workflows/twitter_bot.json ]; then
        echo "✓ Workflow file exists"
        if grep -q "TWITTER_API_KEY_1" .env && grep -q "OPENAI_API_KEY" .env; then
            echo "✓ Environment variables are set"
            echo "✓ Setup complete - Bot will post daily at 9 AM UTC to @AuFart94214"
        else
            echo "✗ Environment variables missing"
        fi
    else
        echo "✗ Workflow file missing"
    fi
else
    echo "✗ N8N is not running"
fi
