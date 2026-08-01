# Deployment

The site is deployed exclusively through **GitHub Pages**. A push to `main`
triggers `.github/workflows/deploy.yml`, which:

1. checks out the repository;
2. installs Node dependencies;
3. runs `npm run build`;
4. uploads `dist/` as the Pages artifact; and
5. deploys the artifact to GitHub Pages.

## Live site

| Setting | Value |
| --- | --- |
| Hosting | GitHub Pages |
| Primary URL | https://howardtech.solutions |
| Source branch | `main` |
| Deployment workflow | `.github/workflows/deploy.yml` |
| Default Pages URL | https://ahowardtech.github.io |

## Custom domain and DNS

The domain is managed in Namecheap and configured for GitHub Pages:

| Type | Host | Value |
| --- | --- | --- |
| ALIAS | `@` | `ahowardtech.github.io` |
| CNAME | `www` | `ahowardtech.github.io` |
| TXT | `_github-pages-challenge-vabss` | GitHub-provided verification value |

`public/CNAME` contains `howardtech.solutions`; Vite copies it to `dist/`
during each build. This ensures the published artifact retains the custom-domain
association.

GitHub Pages verifies the TXT record before issuing the TLS certificate. After
the certificate is ready, enable **Enforce HTTPS** in the repository's
**Settings → Pages** page.

## Local validation

```bash
npm install
npm run lint
npm run build
```

## Retired Azure configuration

`scripts/deploy-azure.ps1`, `public/staticwebapp.config.json`, and
`npm run deploy:azure` are legacy artifacts. They are not used by the GitHub
Pages workflow or the live site.
