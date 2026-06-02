import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const presetsDir = path.join(rootDir, "presets");
const availablePresets = fs
  .readdirSync(presetsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const args = process.argv.slice(2);
const shouldList = args.includes("--list");

if (shouldList) {
  console.log(availablePresets.join("\n"));
  process.exit(0);
}

const presetName = args[0];

if (!presetName) {
  console.error(
    `Usage: npm run preset:apply -- <preset>\nAvailable presets: ${availablePresets.join(", ")}`,
  );
  process.exit(1);
}

if (!availablePresets.includes(presetName)) {
  console.error(
    `Unknown preset "${presetName}". Available presets: ${availablePresets.join(", ")}`,
  );
  process.exit(1);
}

const presetRoot = path.join(presetsDir, presetName, "src");
const copyTargets = [
  "config/theme.json",
  "data/site.json",
  "data/faqs.json",
  "content",
];

for (const relativeTarget of copyTargets) {
  const sourcePath = path.join(presetRoot, relativeTarget);
  const destinationPath = path.join(rootDir, "src", relativeTarget);

  if (!fs.existsSync(sourcePath)) {
    console.error(`Preset is missing required path: ${sourcePath}`);
    process.exit(1);
  }

  fs.cpSync(sourcePath, destinationPath, {
    force: true,
    recursive: true,
  });
}

execFileSync("node", [path.join(__dirname, "themeGenerator.js")], {
  cwd: rootDir,
  stdio: "inherit",
});

console.log(`Applied preset: ${presetName}`);
