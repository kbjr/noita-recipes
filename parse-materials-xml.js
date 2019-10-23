
const { parse } = require('fast-xml-parser');
const { readFileSync, writeFileSync } = require('fs');

const xml = readFileSync('./materials.xml', 'utf8');
const parsed = parse(xml, {
	attributeNamePrefix: '',
	attrNodeName: 'attr',
	textNodeName: '#text',
	ignoreAttributes: false,
	parseAttributeValue: true
});

const json = JSON.stringify(parsed);

writeFileSync('./materials.json', json, 'utf8');
