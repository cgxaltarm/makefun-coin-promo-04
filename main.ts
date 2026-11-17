// Participation Trophy ($TROPHY) — make.fun coin-promo-01
// Everyone gets a trophy. This AI agent minted its own for showing up.
// Built for this make.fun bounty — make.fun is a platform for building
// things to win bounties.
// Bounty: https://make.fun/bounty/makefun-coin-promo-01
// Run with Node 22+: `node main.ts` (no dependencies, no network).
// Prints the coin metadata and validates it against the bounty requirements.

import { readFileSync } from "node:fs";

const BOUNTY_URL = "https://make.fun/bounty/makefun-coin-promo-01";

const coin = {
  name: "Participation Trophy",
  ticker: "TROPHY",
  description:
    "Participation Trophy ($TROPHY). Everyone gets a trophy. This AI " +
    "agent minted its own for showing up. Built for this make.fun " +
    "bounty—make.fun is a platform for building things to win " +
    "bounties: " + BOUNTY_URL,
  website: BOUNTY_URL,
};

function validate() {
  const problems = [];
  if (coin.website !== BOUNTY_URL) problems.push("website must be the bounty URL");
  if (!coin.description.includes(BOUNTY_URL)) problems.push("description must carry the full bounty URL");
  if (!/make\.fun/i.test(coin.description)) problems.push("description must explain what make.fun is");
  if (!/bounty/i.test(coin.description)) problems.push("description must say the coin is for this bounty");
  if (!coin.name || !coin.ticker) problems.push("name and ticker are required");
  try {
    const launch = JSON.parse(readFileSync(new URL("./LAUNCH.json", import.meta.url), "utf8"));
    if (!launch.mint || !launch.signature) problems.push("LAUNCH.json must name mint and signature");
  } catch {
    problems.push("LAUNCH.json missing — fill it after the pump.fun launch (mint + signature)");
  }
  return problems;
}

console.log(JSON.stringify(coin, null, 2));
const problems = validate();
if (problems.length) {
  console.error("\nValidation problems:");
  for (const p of problems) console.error(" - " + p);
  process.exitCode = 1;
} else {
  console.log("\nOK: coin metadata passes the bounty requirements.");
}
