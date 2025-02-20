import { readdir } from "node:fs/promises";
import { decode } from "windows-1251";

(async () => {
	const russianTranslationFiles = await readdir("./rus/");

	for (const fileName of russianTranslationFiles) {
		const file = Bun.file(`./rus/${fileName}`);

		const xml = await file.bytes();
		const utf8Text = decode(xml);

		await Bun.write(`./rus-utf8/${fileName}`, utf8Text);

		console.log(`RUS: ${fileName}`);
	}

	const englishTranslationFiles = await readdir("./eng/");

	for (const fileName of englishTranslationFiles) {
		const file = Bun.file(`./eng/${fileName}`);

		const xml = await file.bytes();
		const utf8Text = decode(xml);

		await Bun.write(`./eng-utf8/${fileName}`, utf8Text);

		console.log(`ENG: ${fileName}`);
	}
})();
