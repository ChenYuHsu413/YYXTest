# Development Log

Date: 2026-06-01

## Summary

The site was rebuilt into a professional one-page brand and recruitment website for 楊宜修國文文理補習班, focused on 115 全學段招生, the 三好特色, division-based program entry points, teacher cards, results, classroom environment, and contact conversion.

## Requests And Changes

1. Rebuilt the homepage into a high-conversion one-page layout.
   - Added Hero section with 115 全學段招生 messaging.
   - Added CTA buttons for 預約諮詢 and 三大分部入口.
   - Applied an academic deep blue and gold visual system.

2. Added dynamic division content.
   - Added tabs for 國小部、國中部、高中部.
   - Used green, blue, and purple-gold color themes per division.
   - Included private-school admission results, 115 國三會考全科班 rhythm, and high-school exam positioning.

3. Added teacher and results sections.
   - Added teacher cards for 楊宜修、章子瑜、Victor、林詠鈞 / 許煬、大雄.
   - Added results and environment metrics for 115 多元入學、114 會考名人榜、94.44% 數學菁英班成果.
   - Added detailed placeholder image alt text for accessibility and future asset replacement.

4. Separated JavaScript from `index.html`.
   - Moved Tailwind configuration and interactive behavior into `script.js`.
   - Kept `index.html` responsible for page structure only.
   - Corrected the filename from `scrpit.js` to `script.js`.

5. Organized documentation.
   - Created `docs/`.
   - Moved `log.md` and `工作報告.md` into `docs/`.

6. Fixed brand and hero contrast.
   - Replaced visible `YYX` branding with `楊宜修`.
   - Adjusted the Hero visual background, image card, and badge styling so text remains readable.

## Files Created Or Updated

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `docs/log.md`
- `docs/工作報告.md`

Date: 2026-05-30

## Summary

Today this project was initialized, published to GitHub Pages, and iteratively updated into a responsive static website for 楊宜修國文文理補習班.

Demo: https://chenyuhsu413.github.io/YYXTest/

## Requests And Changes

1. Initialized the local Git repository and pushed the first version to GitHub.
   - Commit: `688502c Initial commit`

2. Added image assets to the repository.
   - Commit: `a8458a6 Add image assets`

3. Fixed image paths for GitHub Pages.
   - Changed local `Downloads` image paths to repository-relative paths.
   - Commit: `56b8c67 Fix image paths for GitHub Pages`
   - Commit: `1ecd1e4 Use explicit relative image paths`

4. Moved image files into the `sources/` folder.
   - Updated image references in `index.html`.
   - Commit: `4cd298d Move images into sources folder`

5. Extracted inline CSS into a separate stylesheet.
   - Added `styles.css`.
   - Updated `index.html` to load `./styles.css`.
   - Commit: `087cec2 Extract CSS into stylesheet`

6. Added contact links and icons.
   - Added Facebook link.
   - Added Google Maps address link.
   - Updated Google Maps query to avoid searching only for `2樓`.
   - Replaced the map symbol with a Google Material map icon.
   - Commit: `6365b1b Add social and map links`
   - Commit: `09e8ac2 Improve Google Maps search link`
   - Commit: `3fce96b Use Google Material map icon`

7. Adjusted hero highlight cards.
   - Replaced unclear `3-6 / 5+ / 1:1` stats with clearer course highlights.
   - Commit: `e4ac8a0 Clarify hero course highlights`

8. Improved navigation and page controls.
   - Made the navigation bar sticky.
   - Added a back-to-top button.
   - Updated navbar labels and removed the contact nav item.
   - Commit: `2717e58 Make navigation sticky and add back to top`
   - Commit: `14b3094 Update navigation labels`

9. Restyled the site using a warm school-template-inspired visual direction.
   - Kept the top marquee.
   - Updated colors, cards, typography, buttons, and layout.
   - Commit: `b734440 Restyle site with warm school template look`

10. Adjusted contact card layout.
    - Added a phone icon.
    - Equalized contact card heights.
    - Fixed contact card row alignment.
    - Added hover states to phone, Line, and Facebook links.
    - Commit: `a4ccc49 Align contact card heights`
    - Commit: `ec7dfd0 Equalize contact card heights`
    - Commit: `ea1a9d5 Align contact cards on same row`
    - Commit: `a29a6de Add hover states to contact links`

11. Added and expanded project documentation.
    - Added `README.md` with demo link.
    - Expanded README with overview, features, structure, and deployment notes.
    - Commit: `c6cc508 Add README with demo link`
    - Commit: `ffa298b Expand README documentation`

12. Reordered page sections.
    - Moved 課堂側拍 below 國小安親課輔班.
    - Commit: `dba709f Move classroom photos below after-school section`

13. Added interactive contact links.
    - Added Line official account link.
    - Updated Line URL.
    - Added clickable phone link for mobile dialing.
    - Highlighted the Line official account CTA.
    - Commit: `6546169 Link Line contact`
    - Commit: `37f52ac Update Line contact URL`
    - Commit: `6b08f9c Add clickable phone link`
    - Commit: `ab1b890 Highlight Line official account link`

## Files Created Or Updated

- `index.html`
- `styles.css`
- `README.md`
- `sources/`
- `log.md`

