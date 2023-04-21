/**
 * Environment variables with type conversion.
 * Has all the environment variables as properties.
 * Supports number, boolean and string.
 * 
 * If you're not adding the environment variables before script execution, you'll need to call the load method.
 * 
 * @example
 * import { Environment } from 'env-types';
 * 
 * // If you're not adding the environment variables before script execution,
 * // you'll need to call the load method. Like this:
 * import dotenv from 'dotenv';
 * dotenv.config();
 * Environment.load();
 * 
 * console.log(`Number: ${Environment.NUMBER} - Type: ${typeof Environment.NUMBER}`);
 * console.log(`Boolean: ${Environment.BOOLEAN} - Type: ${typeof Environment.BOOLEAN}`);
 * console.log(`String: ${Environment.STRING} - Type: ${typeof Environment.STRING}`);
 */
export class Environment {

	/**
	 * Loads the environment variables.
	 * 
	 * @returns {Environment} The Environment class with the environment variables as properties.
	 */
	static load() {
		const env = process.env;
		for (const key in env) {
			const value = env[key];
			const number = Number(value);
			if (!isNaN(number)) {
				Environment[key] = number;
				continue;
			}

			const lowerCaseValue = value.toLowerCase();
			if (lowerCaseValue === 'true') {
				Environment[key] = true;
				continue;
			} else if (lowerCaseValue === 'false') {
				Environment[key] = false;
				continue;
			}

			Environment[key] = value;
		}

		return Environment;
	}

	static {
		this.load();
	}
}