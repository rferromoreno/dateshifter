import fs from 'fs';
import { replacer } from './utils';
import { DATE_REGEX } from './constants';

const filename = './example.txt';

const content = fs.readFileSync(filename, 'utf8');
const newContent = content.replace(DATE_REGEX, replacer);

console.log(newContent);
