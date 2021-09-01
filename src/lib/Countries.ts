import countryData from './Countries.data';

type IndexedWithString<K> = { [key in string]?: K }

export interface Demonyms {
	f: string
	m: string
}

export interface OfficialAndCommon {
	common: string;
	official: string;
}

export interface CountryName extends OfficialAndCommon {
	native: IndexedWithString<OfficialAndCommon>
}

export interface Currency {
	name: string;
	symbol: string;
}

export interface IntlDirectDialingCode {
	root: string;
	suffixes: string[];
}

export interface Country {
	name: CountryName;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	currencies: IndexedWithString<Currency> | string[];
	idd: IntlDirectDialingCode;
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: IndexedWithString<string>;
	translations: IndexedWithString<OfficialAndCommon>;
	latlng: number[];
	landlocked: boolean;
	borders: string[];
	area: number;
	flag: string;
	demonyms: IndexedWithString<Demonyms>;
	unMember: boolean;
	callingCodes: string[];
}

export type Countries = Country[];

export const countries: Countries = countryData;
