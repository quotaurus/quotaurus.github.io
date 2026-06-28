# Deploying Quotaurus Cheaply

The site is static, so hosting can be free. Keep paying only for the domain.

## Recommended Paths

### Option A: GitHub Pages

Use this for launch.

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Set the source to the main branch root.
5. Set the custom domain to `quotaurus.com`.
6. Wait for GitHub to save the custom domain before changing DNS.
7. In your domain DNS, replace the current Squarespace website records:
   - Apex `A` records for `@` should point to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Optional IPv6 `AAAA` records for `@` should point to:
     - `2606:50c0:8000::153`
     - `2606:50c0:8001::153`
     - `2606:50c0:8002::153`
     - `2606:50c0:8003::153`
   - `www` should be a `CNAME` to the GitHub Pages default domain,
     for example `quotaurus.github.io`.
8. After DNS has propagated, enable Enforce HTTPS in GitHub Pages.

The `CNAME` file in this project already contains `quotaurus.com`.

### Option B: Cloudflare Pages

Use this if you are happy to move DNS management to Cloudflare.

1. Create a Cloudflare account.
2. Add `quotaurus.com` as a site in Cloudflare.
3. Change the domain nameservers from the current Google/Squarespace nameservers
   to the Cloudflare nameservers Cloudflare gives you.
4. Create a Pages project and connect it to this repository.
5. Add `quotaurus.com` as a custom domain in Cloudflare Pages.

Cloudflare is a strong long-term free choice, but the nameserver move is the
extra step.

## Do Not Break Email

Only replace records used for the website. Do not delete these record types if
they exist:

- `MX`
- `TXT`
- `SPF`
- `DKIM`
- `DMARC`

Those are usually for email and domain verification.

## Current Domain State

As checked on June 28, 2026, `quotaurus.com` points at Squarespace:

- Apex `A` records: Squarespace IP addresses
- `www` record: `ext-sq.squarespace.com`
- Public page: Squarespace coming soon page
