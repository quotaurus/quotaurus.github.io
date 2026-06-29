# Quotaurus Website

Static product website for `quotaurus.com`.

The site is for Quotaurus and the Quote Jira Cloud app. The homepage is based
on current Forge app behaviour and is written as a public sales site for Jira
Marketplace visitors:

- Jira project page and issue panel
- Quote creation from project pages and Jira tickets
- Existing quote linking from issue panels
- Client, product/rate, line item, VAT, currency, revenue stream, PO, and forecast-date fields
- PDF quote generation
- Mailgun-backed quote email sending when configured
- Draft, Sent, Accepted, Rejected, Invoiceable, Closed, and Cancelled statuses
- Quote version history
- Recurring monthly quote templates
- Reports available inside the project page

## Local Preview

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Before Publishing

Set up or confirm these email addresses:

- `hello@quotaurus.com`
- `support@quotaurus.com`
- `privacy@quotaurus.com`

Review the privacy and cookie policy wording before using the site for a public
Marketplace listing. The current copy is conservative and assumes the public
website sets no tracking cookies.

The public CTA currently links to the local Marketplace access page because a
direct public Atlassian Marketplace listing URL is not published in this repo.
Replace those links with the direct Marketplace listing URL once the app listing
is available.

## Site Pages

- `index.html` - product homepage
- `use-cases.html` - buyer use cases
- `pricing.html` - Marketplace access and pricing explainer
- `docs.html` - installation and workflow documentation
- `security.html` - Security & Trust information
- `support.html` - support and severity guide
- `contact.html` - contact routes
- `privacy-policy.html` and `cookie-policy.html`
- `changelog.html` - public changelog and roadmap notes

## GitHub Pages

The `CNAME` file contains `quotaurus.com` for GitHub Pages custom-domain
publishing.

The domain currently points at Squarespace. Replace only website records when
the new GitHub Pages site is ready. Do not delete MX, TXT, SPF, DKIM, or DMARC
records if email is in use.
