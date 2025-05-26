import { readdir } from "node:fs/promises";
import iconv from "iconv-lite";

(async () => {
	const russianTranslationFiles = await readdir("./rus/");

	for (const fileName of russianTranslationFiles) {
		const file = Bun.file(`./rus/${fileName}`);

		const xml = await file.text();
		const encoded = iconv.encode(xml, "win1251");

		await Bun.write(
			`./release/G.A.M.M.A Actualized Russian Translations/gamedata/configs/text/rus/${fileName}`,
			encoded,
		);

		console.log(fileName);
	}
})();
