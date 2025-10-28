# React + Vite — TicketApp

## Setup
1. Ensure Node 18+ is installed.
2. In this folder, run:
   ```bash
   npm install
   npm run dev
   ```
3. Open displayed URL (usually http://localhost:5173)

## Notes
- Authentication is simulated with `localStorage` key: `ticketapp_session`.
- Test credentials:
  - Email: test@example.com
  - Password: password123
- Tickets are stored in `localStorage` under `ticketapp_tickets`.

## Project structure
- `index.html` — app mount
- `src/` — main app code (components, styles)
- `src/components` — Landing, Auth, Dashboard, Tickets

Accessibility and responsive layout are included (semantic elements, focusable controls, contrast).

