# Environment variables with types

This package converts environment variables to typed values.

## Installation

```bash
npm install env-types
```

## Usage

### With preloaded environment variables
```js
import { Environment } from 'env-types';

console.log(`Number: ${Environment.NUMBER} - Type: ${typeof Environment.NUMBER}`);
console.log(`Boolean: ${Environment.BOOLEAN} - Type: ${typeof Environment.BOOLEAN}`);
console.log(`String: ${Environment.STRING} - Type: ${typeof Environment.STRING}`);
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