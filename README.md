# Serndhu Padippom 📚

**Tagline:** Serndhu padippom. Goal-ah mudippom!

A static study-timer website with a redesigned shared-study setup UI.

## What's updated in this version

- Replaced the previous homepage layout with a fresh, responsive **Serndhu Padippom** design inspired by the UI concept discussed in chat.
- Removed the Solo/Group mode chooser. The page is now focused on creating or joining a group study session.
- Removed **Session Repeat**, **This Session Only**, and **Daily at this time** options.
- Added one **Permanent Session Link** per created session. The URL remains the same for that session and can be shared with study friends until the session ends. This is a reusable link for that one session, not a recurring daily schedule.
- Kept **One Countdown**, **Focus + Break**, session name, duration presets and scheduled start options (**Start now**, **In 5 minutes**, **In 10 minutes**).
- Kept **Pause for me / Resume for me**: pausing freezes only the current browser's displayed timer; other people continue.
- Updated branding and PWA metadata.

## Run locally

Open `index.html` for a quick preview. Clipboard, notifications, service worker and installable PWA behavior work best on HTTPS or localhost.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Deploy the contents of this folder to GitHub Pages or another static host. Keep `index.html`, `manifest.json`, `sw.js`, and the icon files together.

## Important limitation

This is still a **static frontend** with no server/database or real-time collaboration backend. The session link contains the session configuration and start timestamp, so anyone opening the same link can see the same countdown. The link itself is stable for that session, but it is not a backend-persisted room.

- **Pause for me** freezes only the visible timer snapshot in that browser. The underlying countdown continues in real time; if 10 minutes pass during a local pause, Resume shows 10 minutes less remaining. Other participants continue independently.
- There is no authenticated host identity or backend-enforced host/participant permission system yet.
- The encoded countdown continues independently of the host's browser.

A real-time backend (such as Supabase or Firebase) is needed for persisted room records, participant presence and server-enforced permissions.


## Latest timer behavior and visual update

- Updated the visual style with calmer mint, lavender and soft-gradient accents, softer card shadows, improved spacing and clearer focus controls.
- Local pause freezes the display only; it does not pause or extend the actual session. Example: a 60-minute session has 50 minutes left, then the user pauses for 10 minutes; after resuming, 40 minutes remain.
