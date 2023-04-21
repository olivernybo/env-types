import { Environment } from './index.js';

console.log(`Number: ${Environment.NUMBER} - Type: ${typeof Environment.NUMBER}`);
console.log(`Boolean: ${Environment.BOOLEAN} - Type: ${typeof Environment.BOOLEAN}`);
console.log(`String: ${Environment.STRING} - Type: ${typeof Environment.STRING}`);
console.log(`Null: ${Environment.NULL} - Type: ${typeof Environment.NULL}`);
console.log(`Undefined: ${Environment.UNDEFINED} - Type: ${typeof Environment.UNDEFINED}`);
console.log(`Array: ${Environment.ARRAY} - Type: ${typeof Environment.ARRAY} - Is array: ${Array.isArray(Environment.ARRAY)}`);
console.log(`Object: ${Environment.OBJECT} - Type: ${typeof Environment.OBJECT} - Is object: ${typeof Environment.OBJECT === 'object'}`);