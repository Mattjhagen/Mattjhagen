# Portfolio

The portfolio is a dependency-free static site. The GitHub profile stays in the root README.

## Run locally

With Node.js 22 or newer and Python 3 installed, run:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. Edit files in `site/` and rebuild to refresh the output. The printable résumé is in `site/resume.html`. After changing it, regenerate `site/assets/matthew-hagen-resume.pdf` by printing the résumé to PDF in Chrome, with browser headers and footers disabled.

## Deploy

1. Configure a static host for this repository. Set the build command to `npm run build` and the publish directory to `dist`. Leave environment variables empty.
2. Check the host's preview URL on desktop and mobile. Open each case study and verify the résumé PDF and public contact links.
3. Add `mattyhagen.xyz` as the host's custom domain. Confirm who controls its DNS and whether an existing site needs to move before changing routing. Follow the host's apex DNS and HTTPS instructions. Preserve any unrelated DNS records.
4. Verify HTTPS, the social share image, and `/sitemap.xml` on the public domain.
