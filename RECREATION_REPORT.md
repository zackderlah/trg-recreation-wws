# Recreation report

Source: https://trg.org.au/

This site lives in its own repository and is separate from other client recreations.

## Pages recreated

40 static routes:

- Home, About, In the Community, Charity Golf Day, Members, News, Contact
- `/annual-charity-golf-day` (same golf page the original address resolves to)
- 26 member profiles
- 6 news articles, including the original paths that contain `!` and a curly apostrophe

`npm run build` completes and writes those 40 pages.

## Visual QA

Reference captures and generated screenshots were taken at 1440, 1024, and 390. Three comparison passes were run. The latest pass compared all 120 screenshots (40 pages × 3 viewports). Average pixel difference is about 42%. The cookie consent panel is in both sets of screenshots and accounts for a large share of that difference, along with the original site’s absolute-positioned builder layout.

Checked in the browser:

- Home hero, intro, raffle block, information cards, and the View Map dialog for 20 Herries Street
- Member directory, including page 2 (Working Websites and Your Events Group)
- A member profile with phone and email links
- Contact form: an empty submit shows “Please complete all required fields”; a completed submit does not claim the message was emailed

## Forms and integrations

- Contact form keeps the original fields and the required-fields check. The source WebWave form has an empty recipient, so this recreation does not send email. A valid submit tells the visitor to phone the committee.
- View Map opens a map for 20 Herries Street, Toowoomba, without reusing the original Google Maps API key.
- Raffle tickets link to the existing Raffletix page.
- Golf sponsorship registration links to the original Microsoft Form.
- Charity “Learn more” links go to Hope Horizons and Maddox’s Helping Hand.
- Facebook links to the TRG page.
- Cookie notice can be accepted or opened for preferences.

## Remaining differences

- Layout uses normal document flow. Spacing and card alignment follow the source, and they are not pixel-identical.
- The cookie panel covers the first view, as it does on the source site, but its size and position are not identical.
- Some member profiles still include a stray navigation fragment where the source markup mixed the menu into the article.
- News cards and the contact panel are close in colour and structure, with small differences in the gray bands.

## Human review

- Connect the contact form to a real inbox before launch.
- Confirm Raffletix and the Microsoft Form should stay as external links.
