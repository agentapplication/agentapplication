import { appendFile } from "node:fs/promises";

const text = process.argv.slice(2).join(" ").trim();
if (!text) {
  console.error("usage: node tools/save-note.ts <text>");
  process.exit(1);
}

await appendFile("notes.md", `- ${new Date().toISOString()}: ${text}\n`);
console.log("saved notes.md");
