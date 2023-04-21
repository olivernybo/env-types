# Environment variables with types

This package converts the values of environment variables to their respective types.

## Installation

```bash
npm install env-types
```

## Usage

### With preloaded environment variables
```js
import { Environment } from './index.js';

console.log(`Number: ${Environment.NUMBER} - Type: ${typeof Environment.NUMBER}`);
console.log(`Boolean: ${Environment.BOOLEAN} - Type: ${typeof Environment.BOOLEAN}`);
console.log(`String: ${Environment.STRING} - Type: ${typeof Environment.STRING}`);
console.log(`Null: ${Environment.NULL} - Type: ${typeof Environment.NULL}`);
console.log(`Undefined: ${Environment.UNDEFINED} - Type: ${typeof Environment.UNDEFINED}`);
console.log(`Array: ${Environment.ARRAY} - Type: ${typeof Environment.ARRAY} - Is array: ${Array.isArray(Environment.ARRAY)}`);
console.log(`Object: ${Environment.OBJECT} - Type: ${typeof Environment.OBJECT} - Is object: ${typeof Environment.OBJECT === 'object'}`);
```

### With environment variables loaded in runtime (using dotenv for example)
```js
import dotenv from 'dotenv';
import { Environment } from 'env-types';

// If you're not adding the environment variables before script execution,
// you'll need to call the load method. Like this:
dotenv.config();
Environment.load();

console.log(`Number: ${Environment.NUMBER} - Type: ${typeof Environment.NUMBER}`);
console.log(`Boolean: ${Environment.BOOLEAN} - Type: ${typeof Environment.BOOLEAN}`);
console.log(`String: ${Environment.STRING} - Type: ${typeof Environment.STRING}`);
console.log(`Null: ${Environment.NULL} - Type: ${typeof Environment.NULL}`);
console.log(`Undefined: ${Environment.UNDEFINED} - Type: ${typeof Environment.UNDEFINED}`);
console.log(`Array: ${Environment.ARRAY} - Type: ${typeof Environment.ARRAY} - Is array: ${Array.isArray(Environment.ARRAY)}`);
console.log(`Object: ${Environment.OBJECT} - Type: ${typeof Environment.OBJECT} - Is object: ${typeof Environment.OBJECT === 'object'}`);
```