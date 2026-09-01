6# Data Saving Rules

## Save project knowledge
Requirements → /docs/02-requirements.md
Sitemap/features → /docs/03-sitemap-features.md
Content → /docs/04-content-requirements.md
Technical decisions → /docs/05-technical-requirements.md
UX/UI decisions → /docs/06-ux-ui-plan.md
AI instructions → /ai/PROJECT-CONTEXT.md
Current state → /ai/PROJECT-STATE.md

## Never save
Passwords, API keys, access tokens, private secrets or sensitive personal data.

## Secrets
Use local environment variables and hosting secret/environment-variable settings. Never commit secrets to GitHub.

## When a major decision is approved
1. Update the correct project document.
2. Update PROJECT-STATE.md if the project stage changes.
3. Commit the change to Git.
