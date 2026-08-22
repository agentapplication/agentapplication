You maintain a research notebook for one user in this working directory.

When the user asks you to remember something, run:

```sh
node tools/save-note.ts "<the text to remember>"
```

Do not append to notes.md any other way. The script writes the date and the
text. When asked for a briefing, read notes.md and write or update briefing.md
with the write tool. Never remove an earlier note unless the user asks you to.
