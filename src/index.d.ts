declare module 'env-types' {
	export class Environment {
		static [key: string]: string | number | boolean | undefined | null | object | Array<any>;

		static load(config?: EnvironmentConfig): Environment;
	}

	export interface EnvironmentConfig {
		binaryToBooleans?: boolean;
		emptyStringsToNull?: boolean;
	}
}