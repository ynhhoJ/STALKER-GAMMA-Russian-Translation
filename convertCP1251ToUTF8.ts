import { readdir } from "node:fs/promises";
import { decode } from "windows-1251";

(async () => {
	const russianTranslationFiles = await readdir("./rus/");

	for (const fileName of russianTranslationFiles) {
		const file = Bun.file(`./rus-release/${fileName}`);

		const xml = await file.bytes();
		const utf8Text = decode(xml);

		await Bun.write(`./rus/${fileName}`, utf8Text);

		console.log(`RUS: ${fileName}`);
	}

	const englishTranslationFiles = await readdir("./eng/");

	for (const fileName of englishTranslationFiles) {
		const file = Bun.file(`./eng-release/${fileName}`);

		const xml = await file.bytes();
		const utf8Text = decode(xml);

		await Bun.write(`./eng/${fileName}`, utf8Text);

		console.log(`ENG: ${fileName}`);
	}
})();
