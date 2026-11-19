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

## Deploy through Cloudflare Tunnel on r510

The portfolio origin is a user service named `matty-portfolio.service` on r510. It serves the built files at `http://127.0.0.1:18765`. The public hostname is `portfolio.mattjhagen.xyz`.

For an update, pull the desired revision in `~/services/matty-portfolio/source`, run `npm run build`, then check the origin with `curl -fsS http://127.0.0.1:18765/`. Restart the user service with `systemctl --user restart matty-portfolio` if it is inactive.

In Cloudflare Zero Trust, add a published application route for `portfolio.mattjhagen.xyz` on the healthy r510 tunnel, with service type HTTP and origin `127.0.0.1:18765`. Leave the root and www blog routes in place. To roll back public access, remove only the portfolio application route and its associated DNS record.
