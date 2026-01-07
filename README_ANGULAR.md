# VogueThreads (Angular)

This folder contains an Angular version of the static `VogueThreads/*.html` pages.

## What you get

- Route-based pages:
  - `/` (Home)
  - `/products`
  - `/account`
  - `/checkout`
  - `/register`
- Shared layout components:
  - `app-header`
  - `app-footer`
  - `app-page-header`
- Shared styling extracted into `src/styles.scss`.

## Running locally

Prereqs: Node.js + npm.

```zsh
cd VogueThreads/angular-app
npm install
npm start
```

Then open the URL printed by the dev server.

## Notes

- This conversion focuses on component reuse and matching existing markup/styles.
- Any interactive JS from the original pages is not fully implemented yet (e.g., filter toggles, cart logic). The structure is ready for adding that behavior with Angular.

