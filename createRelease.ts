import { readdir } from "node:fs/promises";
import iconv from "iconv-lite";

(async () => {
	const russianTranslationFiles = await readdir("./rus/");

	for (const fileName of russianTranslationFiles) {
		const file = Bun.file(`./rus/${fileName}`);

		const xml = await file.text();
		const encoded = iconv.encode(xml, "win1251");

		await Bun.write(
			`./release/287- G.A.M.M.A. Massive Text Overhaul Project - SageDaHerb and Dr.Pr1nkos/gamedata/configs/text/rus/${fileName}`,
			encoded,
		);

		if (fileName === "ui_st_jamming.xml") {
			await Bun.write(
				`./release/G.A.M.M.A. Unjam Reload on the same key/gamedata/configs/text/rus/${fileName}`,
				encoded,
			);
		}

		if (fileName === "st_indirect_parts_favoriter.xml") {
			await Bun.write(
				`./release/G_FLAT's Indirect Parts Favoriter/gamedata/configs/text/rus/${fileName}`,
				encoded,
			);
		}

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
