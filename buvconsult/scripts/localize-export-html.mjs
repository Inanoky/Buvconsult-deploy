import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(entryPath);
      return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
    })
  );
  return nested.flat();
}

const englishFiles = [
  path.join(outputDirectory, "en.html"),
  ...(await htmlFiles(path.join(outputDirectory, "en"))),
];

await Promise.all(
  englishFiles.map(async (file) => {
    const html = await readFile(file, "utf8");
    const localizedHtml = html.replace('<html lang="lv"', '<html lang="en"');
    if (localizedHtml !== html) await writeFile(file, localizedHtml, "utf8");
  })
);

console.log(`Set lang=\"en\" in ${englishFiles.length} exported HTML files.`);
