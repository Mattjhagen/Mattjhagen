# Portfolio

The portfolio is a dependency-free static site. The GitHub profile stays in the root README.

## Run locally

With Node.js 22 or newer and Python 3 installed, run:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. Edit files in `site/` and rebuild to refresh the output. The printable résumé is in `site/resume.html`. After changing it, regenerate `site/assets/matthew-hagen-resume.pdf` by printing the résumé to PDF in Chrome, with browser headers and footers disabled.

## Deploy with GitHub Pages

1. In the repository's **Settings → Pages**, set the publishing source to **GitHub Actions**. The portfolio workflow builds and publishes `dist` on pushes to `main`.
2. Check the deployment at https://mattjhagen.github.io/Mattjhagen/. Open the case studies and test the résumé PDF and contact links.
3. Verify ownership of `mattjhagen.xyz` in GitHub, then add it as the custom domain in **Settings → Pages**. Check whether the domain has an existing site before updating its Cloudflare DNS records. Follow [GitHub's apex-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Enable **Enforce HTTPS** after GitHub provisions the certificate. Verify the portfolio, PDF, social share image and `/sitemap.xml` on the custom domain.
