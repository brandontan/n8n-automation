# n8n Automation README

## Updating the Tweet Schedule

To update the scheduled tweet workflow to run at 9 PM (21:00):

1. Access the n8n web interface at http://localhost:5678
2. Log in (if required)
3. Open the Twitter daily post workflow
4. Click on the Schedule trigger node
5. Change the cron expression to `0 21 * * *` (this sets it to run at 21:00/9 PM daily)
6. Save the workflow
7. Activate the workflow if it's not already active

## Restarting n8n after changes

After making changes to workflows, restart the n8n service using PM2:

```bash
pm2 restart n8n-twitter-bot
```

This ensures that the changes take effect immediately.

