import { readdir } from "node:fs/promises";

(async () => {
	const englishTranslationFiles = await readdir("./eng/");
	const russianTranslationFiles = await readdir("./rus/");

	const missedFiles: Array<string> = [];

	for (const file of englishTranslationFiles) {
		if (russianTranslationFiles.includes(file)) {
			continue;
		}

		missedFiles.push(file);
	}

	console.log(`Total missed files: ${missedFiles.length}`, missedFiles);
})();
