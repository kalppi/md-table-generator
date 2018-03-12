#!/usr/bin/env node

const yaml = require('js-yaml');
const fs   = require('fs');

if(process.argv.length < 3) return;

try {
	const doc = yaml.safeLoad(fs.readFileSync(process.argv[2], 'utf8'));


	let output `# ${doc.title}\n\n`;
	output += '| ';

	for(let column of doc.columns) {
		output += column.text + ' | ';
	}

	output += '\n';
	output += '| ';

	for(let column of doc.columns) {
		switch(column.align) {
			case 'left':
				output += ':---';
				break;
			case 'center':
				output += ':---:';
				break;
			case 'right':
				output += '---:';
				break;
		}

		output += ' | ';
	}

	output += '\n';
	output += '| ';

	let sum = 0;

	for(let row of doc.data) {
		for(let index in row) {
			const column = row[index];

			output += `${column} | `;

			if(index == doc.sum.column - 1) {
				sum += parseFloat(column);
			}
		}
		output += '\n| ';
	}

	output += doc.sum.text;
	output += ` | ${sum}\n`;

	fs.writeFileSync(doc.output, output);

	console.log(`Generated ${doc.output}`);
} catch (e) {
	console.log(e);
}