import { appendFile } from "node:fs/promises";

export async function saveNote(text: string) {
  await appendFile("notes.md", `- ${new Date().toISOString()}: ${text}\n`);
  return { saved: "notes.md" };
}
