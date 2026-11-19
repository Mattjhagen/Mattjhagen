# Portfolio

The portfolio is a dependency-free static site. The GitHub profile stays in the root README.

## Run locally

With Node.js 22 or newer and Python 3 installed, run:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. Edit files in `site/` and rebuild to refresh the output. The printable résumé is in `site/resume.html`. After changing it, regenerate `site/assets/matthew-hagen-resume.pdf` by printing the résumé to PDF in Chrome, with browser headers and footers disabled.

## Production deployment on r510

The public site is https://portfolio.mattjhagen.xyz/. The user service `matty-portfolio.service` serves the built files over HTTP at `127.0.0.1:18765`. A separate user service, `cloudflared-matty-portfolio.service`, runs the dedicated `matty-portfolio` Cloudflare Tunnel using `~/.cloudflared/matty-portfolio.yml`. The Cloudflare DNS entry for `portfolio` points to this tunnel.

For an update, run these commands on r510:

```sh
cd ~/services/matty-portfolio/source
git fetch origin main
git checkout --detach origin/main
npm run build
curl -fsS http://127.0.0.1:18765/ -o /dev/null
```

Check the public homepage and résumé after deployment. To roll back the content, check out the previous deployed revision and rebuild. To take the portfolio offline, remove only its DNS record and stop `cloudflared-matty-portfolio.service` with `systemctl --user disable --now cloudflared-matty-portfolio.service`. The blog uses its own tunnel.
