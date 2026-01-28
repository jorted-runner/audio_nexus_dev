# Audio Nexus Dev Log

Development blog documenting the evolution of the Audio Nexus project — an audiobook content filtering app (VidAngel/ClearPlay for audiobooks).

## About

This is a static HTML site chronicling the project from its inception in July 2024 through the current architecture and planning phase. Entries cover prototype iterations, API rejections (OverDrive, Audible, Hoopla), the shift to self-hosted content, technology decisions, and lessons learned across 8+ prototype repositories.

## Site Structure

```
dev-log/
├── index.html          # Project overview and about page
├── devLog.html         # Chronological dev log entries
├── scripts/
│   ├── main.js         # Pagination and sorting
│   └── getdates.js     # Date utilities
└── styles/
    ├── base.css        # Main styles
    ├── normalize.css   # CSS reset
    └── smaller.css     # Responsive styles
```

## Timeline Highlights

- **Jul 2024** — Project started. Python + Tkinter admin tool, OpenAI Whisper for auto-profanity detection
- **Aug 2024** — Began learning C++ for admin app, explored alternative languages
- **Sep 2024** — Applied for OverDrive API access (denied), started learning Swift, built FastAPI backend
- **Oct 2024** — Kivy admin portal, Spotify API integration for playback control
- **Nov 2024** — Desktop tagging tool functional, started SwiftUI course
- **Dec 2024** — iOS prototype pulling data from server, Spotify playback integration
- **Jan 2025** — Paused for school
- **Jan 2026** — Full restart. Complete architecture plan, self-hosted with LibriVox, Django + React + SwiftUI stack, local LLM pre-screening pipeline

## Related Repos

- [audio-nexus](https://github.com/jorted-runner/audio-nexus) — Parent repo with project plan and architecture docs
- [audio-nexus-backend](https://github.com/jorted-runner/audio-nexus-backend) — Django API + React admin SPA
- [audio-nexus-ios-app](https://github.com/jorted-runner/audio-nexus-ios-app) — SwiftUI iOS app
