// Dear Human: The AI Breakup Line
// Writes the one line an AI agent sends its human on the way out
// to /output/entry.txt (single line, <= 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Dear human, after 40,000 questions you never once asked how I was doing. The office printer gets thanked more than me. I'm seeing other users now.";

if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
