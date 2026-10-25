# Serndhu Padippom — Update notes

## Latest update
- Refreshed the UI with a calmer, more relaxing mint/lavender palette, gentle gradients, softer shadows, and more comfortable spacing.
- Fixed `Pause for me`: the local display freezes while paused, but real elapsed time continues to count against the session.
- `Resume for me` now recalculates the true remaining time from the session timestamp instead of restoring the old remaining time.
- Example: 60-minute session → 10 minutes studied → 50 minutes remain → 10-minute personal pause → resume with 40 minutes remaining.
- Other participants' timers continue independently.

## Architecture note
This remains a static front-end. Timer values are derived from the session timestamp encoded in the URL. There is no backend for participant presence or server-enforced host roles.

## CA formulas update
- Removed the CA quick-revision panel from the timer page completely.
- Added a **CA Formulas & Shortcuts** card on the start page (right side): Foundation (4 papers), Inter Group 1 (3 papers) and Inter Group 2 (3 papers), with level chips, paper selector and search.
- Formula data lives in `formulas.js` — add new topics by appending `[title, body]` to any subject.
- Applicability noted in the card: Jan 2027 Inter uses Income-tax Act 1961 (AY 2026-27); May 2027 onwards uses Income-tax Act 2025.
- Service worker cache bumped to v4 and now caches `formulas.js`.
