// import dependencies
import { readFileSync } from 'fs';
import { resolve } from 'path';

// ensure the filepath is relative to this script
const filePath = 'ca-certificate.cer';

// the main operation
const base64Text = readFileSync(resolve(filePath)).toString('base64');

// write output to console
console.log(base64Text);

//https://dop3ch3f.medium.com/working-with-ssl-as-env-variables-in-node-js-bonus-connecting-mysql-with-ssl-2bd49508fe14
