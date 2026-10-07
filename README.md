# Quotaurus Website

Static product website for `quotaurus.com`.

Quotaurus is the company. Current public product pages cover:

- RevFlow, the Jira Cloud app with the strapline "Quote-to-delivery revenue
  control for Jira"
- Muckr, the iOS household task app with the strapline "Share the chores. Split
  the reward."

`index.html` is the Quotaurus organisation/product-family page. `revflow.html`
is the public RevFlow sales page for Jira Marketplace visitors and is based on
current Forge app behaviour:

- Jira project page and issue panel named RevFlow
- First-run setup wizard and setup banner for project admins
- Configurable Jira field mappings, issue types, quote statuses, work buckets,
  currencies, tax, quote numbering, features, email providers, and permissions
- Quote creation from project pages and Jira issues
- Existing quote linking from issue panels
- Client, product/rate, line item, VAT, currency, revenue stream, PO, and
  forecast-date fields
- PDF quote generation
- Optional Mailgun or SendGrid quote email sending when configured
- Saved quote filtering by status, system, date, and search text
- Quote funnel, value over time, top clients, top systems, revenue streams,
  billable activity, completion-month, missing-coverage, and billing export
  reporting
- Recurring monthly quote templates
- Setup import/export
- Jira dark mode compatibility

The Muckr page is based on the current Expo/Supabase app behaviour:

- Email-code sign-in and Sign in with Apple on iOS
- Household creation and invite-code joining
- Task Master and Helper roles
- Weekly task planning, Stored Tasks, and recurring tasks
- Task descriptions, checklists, photo guides, and video guides
- Claiming, marking done, rating, Pay Day settlement, and payment-link handoff
- Money, custom reward-unit, and "just tasks" household modes
- Muckr Premium via App Store subscriptions
- Account deletion from the app

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

Review the privacy and cookie policy wording before using the site for public
Marketplace or App Store links. The current copy is conservative and assumes the
public website sets no tracking cookies.
The public RevFlow CTA links directly to the live Atlassian Marketplace listing.

## Site Pages

- `index.html` - Quotaurus organisation and product-family homepage
- `revflow.html` - RevFlow product homepage
- `muckr.html` - Muckr iOS app product page
- `use-cases.html` - buyer use cases
- `pricing.html` - Marketplace access and pricing explainer
- `docs.html` - setup and workflow documentation
- `security.html` - Security & Trust information
- `support.html` - support and severity guide
- `contact.html` - contact routes
- `privacy-policy.html` - privacy centre
- `revflow-privacy.html` - RevFlow privacy policy
- `muckr-privacy.html` - Muckr privacy policy
- `cookie-policy.html` - website cookie policy

## GitHub Pages

The `CNAME` file contains `quotaurus.com` for GitHub Pages custom-domain
publishing.

The site is published from this repository through GitHub Pages. Keep email DNS
records such as MX, TXT, SPF, DKIM, or DMARC separate from website hosting
changes.
