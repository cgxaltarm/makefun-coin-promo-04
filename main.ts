// Participation Trophy ($TROPHY) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The coin itself is the entry. This program does one thing: it copies
// LAUNCH.json from the repository root to /output/LAUNCH.json, where the
// gate reads it. LAUNCH.json names the coin's mint and the base58 signature
// of the pump.fun transaction that created it. The house looks the coin up
// on pump.fun and hands the coin as shown there (logo, name, ticker,
// description, links) to the judge. Nothing this program writes is judged.
//
// The coin: Participation Trophy ($TROPHY), launched 17 Nov 2026 on pump.fun
// from the wallet linked to the submitting make.fun account, initial buy
// $1 in SOL, for 0.022919979 SOL total (create 0.009136381 + buy 0.013784).
// Its logo is a gold trophy with huge "make.fun" across the cup and
// "SHOWED UP" on the base plaque; its metadata lives in metadata.json in
// this repository. Third coin-promo entry after Grind Ant ($ANT) and
// Paystub ($PAY): same wallet, new repo, new mint. If this coin's score
// lands below $PAY's, $PAY stays the final entry (Force_Last — submitting
// this replaces it only if it scores higher in the final grading).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "LAUNCH.json"), join(OUTPUT_DIR, "LAUNCH.json"));
} catch (err) {
  console.error(
    `LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`
  );
  process.exit(1);
}
