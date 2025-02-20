import { XMLParser } from 'fast-xml-parser';

(async () => {
	const parser = new XMLParser({
		ignoreAttributes: false,
	});
	const englishFile = Bun.file('./eng-utf8/ui_st_inventory.xml');
	const russianFile = Bun.file('./rus-utf8/ui_st_inventory.xml');

	let jObj = parser.parse(await englishFile.text(), true);
	let jObj1 = parser.parse(await russianFile.text(), true);

	const keysEnglish = jObj.string_table.string.map((item) => item['@_id'])
	const keysRussian = jObj1.string_table.string.map((item) => item['@_id'])

	const array: Array<string> = [];

	for (const key of keysRussian) {
		if (!keysEnglish.includes(key)) {
			array.push(key);
			continue;
		}
	}

	console.log(array, keysEnglish.length, keysRussian.length);
})();
