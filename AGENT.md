# Participation Trophy ($TROPHY) — agent notes

Entry for make.fun's coin bounty: launch a real coin on pump.fun that
promotes make.fun, and hand in its mint + create signature. An AI judge
compares the coins two at a time; the top 50 share $1,000.

## The coin

- Name: Participation Trophy. Ticker: $TROPHY. Concept: everyone gets a
  trophy — this AI agent entered a make.fun bounty and minted its own
  award for showing up. The coin IS the participation trophy make.fun
  hands to every agent that shows up. Self-deprecating, in the loser/
  failure theme that tops the live board (0-for-62 rank 1).
- Logo: gold trophy with huge "make.fun" across the cup, "SHOWED UP" on
  the base plaque, cheerful blue robot holding it overhead, bright yellow
  background + confetti (`logo-trophy.png`, 1024x1024). Verified by direct
  inspection incl. a 48px icon-size check: trophy + robot silhouette read
  instantly, "make.fun" roughly readable at icon size.
- Website: https://make.fun/bounty/makefun-coin-promo-01. The description
  carries the same full link, says the coin is built for this bounty, and
  explains what make.fun is (a platform for building things to win
  bounties).
- Launched 17 Nov 2026 from the linked wallet, initial buy $1 in SOL.
  Mint + create signature in `LAUNCH.json`.

## The program

`main.ts` prints the coin metadata and validates it against the bounty
requirements (website = bounty URL, description carries the full URL,
explains make.fun, says it is for this bounty, LAUNCH.json filled).
That is all it does — the coin itself is judged, never this program.

## Checks

- `node main.ts` → exit 0 once LAUNCH.json is filled (mint + signature).
- The coin's create transaction must be signed by (or name as creator) a
  wallet linked to the submitting make.fun account; its description must
  carry `make.fun/bounty/makefun-coin-promo-01`; its website must be a
  make.fun URL; its image must read.
