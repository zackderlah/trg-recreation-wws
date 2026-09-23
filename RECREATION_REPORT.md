# TRG recreation report

Source: https://trg.org.au/
Built: 23 September 2026

## Pages recreated

40 routes, matching the captured sitemap:

- Home, About, In the Community, Charity Golf Day, Annual Charity Golf Day, Members, News, Contact
- 26 member profiles
- 6 news articles

Original URLs are preserved, including article paths that contain `!` and a curly apostrophe.

## Visual QA

Compared the built pages in a browser against the captured desktop screenshots for home, members, about, community, charity golf day, news, contact, and a member profile.

Matched:

- Charcoal header, TRG logo, centred navigation, Facebook link, and navy footer
- Home hero, referral headline, coral introduction, raffle block, and three information cards
- Member directory logos, names, and page-2 pagination
- Member profile name, category, copy, and contact details
- News featured story and card list
- Committee photos and contact phone numbers

Remaining visual differences:

- Spacing, type size, and card borders are close rather than pixel-identical
- The 2026 golf sponsor columns are summarised from the captured text; some original sponsor names may be missing
- The cookie notice is included and can be dismissed. Captured source screenshots still show that notice over the page, so automated pixel diffs stay high until those screenshots are retaken with the notice closed
- The home map opens for 20 Herries Street, Toowoomba, without reusing the original Google Maps API key

## Forms and integrations

- Contact form keeps the original fields (business, type, name, phone, email, comments). The captured WebWave form had an empty recipient, so sending shows a note to call the committee instead of pretending an email was delivered
- Charity raffle tickets link to RaffleTix
- Golf registration links to the original Microsoft Form
- Charity “learn more” links go to Hope Horizons and Maddox’s Helping Hand
- Facebook links to the TRG page

## Missing assets

- A Grace Information PDF link triggered a browser download during capture and was not saved as a page. Member profile links that pointed at files are kept when they were present in the page HTML
- The largest About hero variant returned 404. The site uses the smaller captured hero image

## Human review

- Connect the contact form to the committee mailbox TRG wants to use
- Confirm the 2026 golf sponsor list against the current live page before publishing
- Replace the “Designed by Working Websites / Powered by WebWave” footer if that credit should not carry over
