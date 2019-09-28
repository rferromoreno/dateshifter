import fs from 'fs';
import yargs from 'yargs';
import { replacer } from './utils';
import { DATE_REGEX } from './constants';

const argv = yargs
  .usage('Usage: $0 <input> <output> [options]')
  .help('h')
  .alias('h', 'help').argv;

const input = argv._[0];
const output = argv._[1];

try {
  if (!input) {
    console.error('Missing input file');
    throw Error('NO_INPUT_FILE');
  }
  if (!output) {
    console.error('Missing output file');
    throw Error('NO_OUTPUT_FILE');
  }

  const content = fs.readFileSync(input, 'utf8');
  const newContent = content.replace(DATE_REGEX, replacer);
  fs.writeFileSync(output, newContent);

  console.log('Ready!');
} catch (err) {
  console.error("Couldn't complete the request");
}
