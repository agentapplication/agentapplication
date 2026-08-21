import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const architectureRoot = path.join(
  repositoryRoot,
  "docs",
  "images",
  "architecture",
);
const checkOnly = process.argv.includes("--check");

// Each key is an existing light-mode color. The value is its deliberate
// dark-mode counterpart. Light-mode values are never changed by this script.
const darkPalette = new Map([
  ["#000000", "#f3f6fc"],
  ["#111827", "#dbe4f4"],
  ["#172033", "#e7edf8"],
  ["#3f587d", "#8faada"],
  ["#475569", "#afbdd2"],
  ["#4f6b95", "#9ab6e2"],
  ["#51651b", "#b3cd58"],
  ["#57926b", "#75c494"],
  ["#596273", "#b9c3d4"],
  ["#624b76", "#b58fca"],
  ["#64748b", "#9eacc2"],
  ["#697598", "#9cabd1"],
  ["#6b7280", "#aeb8c9"],
  ["#7d8fc5", "#aebeea"],
  ["#7e8cb4", "#9fafe0"],
  ["#7f9131", "#b8cf5d"],
  ["#89994a", "#bdcf70"],
  ["#8a7427", "#d9bb50"],
  ["#8d83ad", "#b9aae1"],
  ["#94a3b8", "#7f90aa"],
  ["#9b79b5", "#c49add"],
  ["#a5b563", "#cfe083"],
  ["#b29a3c", "#e3c861"],
  ["#b49a3c", "#e3c861"],
  ["#c58a47", "#e7a866"],
  ["#d5a469", "#f0bd7c"],
  ["#e0e0e0", "#2e3745"],
  ["#eaefff", "#202c49"],
  ["#ededed", "#303947"],
  ["#eef2ff", "#1c2944"],
  ["#eef5cc", "#26351d"],
  ["#eef9f1", "#1a3024"],
  ["#f0f2e3", "#252b1f"],
  ["#f1f7dc", "#28351f"],
  ["#f2f5ff", "#1d2942"],
  ["#f4f1fb", "#2b2239"],
  ["#f5f7fc", "#20293a"],
  ["#f7f1fb", "#2d223b"],
  ["#f7f9ff", "#1b263d"],
  ["#f7faee", "#242f1c"],
  ["#f8faef", "#222b1c"],
  ["#f8fafc", "#202733"],
  ["#fbfbf7", "#10141b"],
  ["#fdfef8", "#1b2a22"],
  ["#ffffef", "#1d2430"],
  ["#fff5e9", "#362518"],
  ["#fff7ed", "#342318"],
  ["#fff8d8", "#382f18"],
  ["#fffaf2", "#302218"],
  ["#fffaf4", "#302218"],
  ["#ffffff", "#1d2430"],
]);

function colorKey(value) {
  const trimmed = value.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(trimmed)) return trimmed;

  const rgb = trimmed.match(
    /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,
  );
  if (!rgb) return trimmed.replaceAll(" ", "");

  return `#${rgb
    .slice(1)
    .map((part) => Number(part).toString(16).padStart(2, "0"))
    .join("")}`;
}

function darkColorFor(lightColor) {
  const key = colorKey(lightColor);
  if (key === "rgba(0,0,0,0.25)") return "rgba(0, 0, 0, 0.45)";
  return darkPalette.get(key);
}

function replaceLightDarkFunctions(source) {
  const functionName = "light-dark(";
  let output = "";
  let cursor = 0;

  while (cursor < source.length) {
    const start = source.indexOf(functionName, cursor);
    if (start === -1) {
      output += source.slice(cursor);
      break;
    }

    output += source.slice(cursor, start);
    let depth = 1;
    let comma = -1;
    let end = start + functionName.length;

    for (; end < source.length && depth > 0; end += 1) {
      const character = source[end];
      if (character === "(") depth += 1;
      if (character === ")") depth -= 1;
      if (character === "," && depth === 1 && comma === -1) comma = end;
    }

    if (depth !== 0 || comma === -1) {
      output += source.slice(start);
      break;
    }

    const lightColor = source.slice(
      start + functionName.length,
      comma,
    ).trim();
    const isShadowColor = source
      .slice(Math.max(0, start - "shadowColor=".length), start)
      .endsWith("shadowColor=");
    const darkColor = isShadowColor ? "#000000" : darkColorFor(lightColor);

    if (darkColor) {
      output += `light-dark(${lightColor}, ${darkColor})`;
    } else {
      output += source.slice(start, end);
    }
    cursor = end;
  }

  return output;
}

function adaptiveColor(lightColor) {
  const darkColor = darkColorFor(lightColor);
  return darkColor ? `light-dark(${lightColor}, ${darkColor})` : lightColor;
}

function applyExplicitSourceColors(source) {
  let output = source;

  // Draw.io style properties in both .drawio files and the editable source
  // embedded in .drawio.svg files.
  output = output.replace(
    /\b((?:fill|stroke|font|labelBackground|gradient)Color=)(#[0-9a-f]{6})/gi,
    (_, property, lightColor) => `${property}${adaptiveColor(lightColor)}`,
  );

  output = output.replace(
    /background="(#[0-9a-f]{6})"/gi,
    (_, lightColor) => `background="${adaptiveColor(lightColor)}"`,
  );
  output = output.replace(
    /background=&quot;(#[0-9a-f]{6})&quot;/gi,
    (_, lightColor) =>
      `background=&quot;${adaptiveColor(lightColor)}&quot;`,
  );

  // Preserve legacy <font> markup while moving its color to valid CSS, where
  // light-dark() is supported.
  output = output.replace(
    /color=(&(?:amp;)?quot;)(#[0-9a-f]{6})\1/gi,
    (_, quote, lightColor) =>
      `style=${quote}color: ${adaptiveColor(lightColor)}${quote}`,
  );

  output = output.replace(
    /\b(color|background-color):\s*(#[0-9a-f]{6}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\))/gi,
    (_, property, lightColor) =>
      `${property}: ${adaptiveColor(lightColor)}`,
  );

  // Draw.io otherwise turns black light-mode shadows into white glows in dark
  // mode. An explicit shadow color keeps the original light appearance and
  // produces natural depth on the dark surfaces.
  output = output.replace(
    /shadow=1;(?!shadowColor=)/g,
    "shadow=1;shadowColor=light-dark(#000000, #000000);",
  );

  return output;
}

function applyAdaptiveIconColor(source) {
  return source.replaceAll(
    "stroke%3D%22%23475569%22",
    "stroke%3D%22light-dark(%23475569%2C%23afbdd2)%22%20style%3D%22color-scheme%3Alight%20dark%22",
  );
}

function applyDarkMode(source) {
  return applyAdaptiveIconColor(
    applyExplicitSourceColors(replaceLightDarkFunctions(source)),
  );
}

const diagramFiles = (await readdir(architectureRoot))
  .filter((fileName) =>
    fileName.endsWith(".drawio") || fileName.endsWith(".drawio.svg"),
  )
  .sort();

const changed = [];
for (const fileName of diagramFiles) {
  const filePath = path.join(architectureRoot, fileName);
  const source = await readFile(filePath, "utf8");
  const updated = applyDarkMode(source);

  if (source === updated) continue;
  changed.push(fileName);
  if (!checkOnly) await writeFile(filePath, updated);
}

if (checkOnly && changed.length > 0) {
  console.error(
    `Diagram dark-mode colors are out of date: ${changed.join(", ")}`,
  );
  process.exitCode = 1;
} else if (!checkOnly) {
  console.log(
    changed.length > 0
      ? `Updated dark-mode colors in ${changed.length} diagram files.`
      : "Diagram dark-mode colors are already up to date.",
  );
}
