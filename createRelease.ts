import { readdir } from "node:fs/promises";
import iconv from "iconv-lite";

(async () => {
	const russianTranslationFiles = await readdir("./rus/");

	for (const fileName of russianTranslationFiles) {
		const file = Bun.file(`./rus/${fileName}`);

		const xml = await file.text();
		const encoded = iconv.encode(xml, "win1251");

		await Bun.write(`./release/${fileName}`, encoded);

		console.log(fileName);
	}

	// const englishTranslationFiles = await readdir("./eng-utf8/");
	//
	// for (const fileName of englishTranslationFiles) {
	// 	const file = Bun.file(`./eng-utf8/${fileName}`);
	//
	// 	const xml = await file.text();
	// 	const encoded = iconv.encode(xml, "win1251");
	//
	// 	await Bun.write(`./eng-release/${fileName}`, encoded);
	//
	// 	console.log(fileName);
	// }
})();
