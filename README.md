# Environment variables with types

Are you tired of converting environment variables to their respective types, like me? Then this package is for you! This package converts the values of environment variables to their respective types, so you don't have to worry about it anymore.

It supports it all (I think, except functions, of course): numbers, booleans, strings, null, undefined, arrays and objects. It also supports nested objects and arrays, in other words, it supports JSON.

## Installation

```bash
npm install env-types
```

## Usage
The package uses static properties to store the environment variables, so you can access them directly from the Environment class. The properties are named after the environment variables.

This means they only have to be loaded once, and you can access them from anywhere in your code, without having to pass them around or load them over and over again.

If you're using environment variables that are loaded in runtime, you'll need to call the load method before accessing the environment variables. If the environment variables are already loaded, you don't need to do anything, just access the environment variables, lay back and enjoy the magic.

### With preloaded environment variables
```js
import { Environment } from 'env-types';

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

### Environment variables used in the examples
This is the environment file that I used in the examples above:
```
NUMBER=1
BOOLEAN=true
STRING=hello world
NULL=null
UNDIFINED=undefined
ARRAY=[1,2,3]
OBJECT={"a":1,"b":2,"c":3}
```