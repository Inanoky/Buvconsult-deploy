import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(".next/server/app");
async function htmlFiles(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const nested = await Promise.all(
		entries.map((entry) => {
			const file = path.join(directory, entry.name);
			if (entry.isDirectory()) return htmlFiles(file);
			return entry.isFile() && entry.name.endsWith(".html") ? [file] : [];
		}),
	);
	return nested.flat();
}
for (const locale of ["en", "ru"]) {
	const files = [
		path.join(outputDirectory, `${locale}.html`),
		...(await htmlFiles(path.join(outputDirectory, locale))),
	];
	await Promise.all(
		files.map(async (file) => {
			const html = await readFile(file, "utf8");
			const localized = html.replace(
				/<html lang="[^"]+"/,
				`<html lang="${locale}"`,
			);
			if (html !== localized) await writeFile(file, localized, "utf8");
		}),
	);
	console.log(
		`Set ${locale} document language in ${files.length} exported pages.`,
	);
}
