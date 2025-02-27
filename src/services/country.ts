import axiosClient from "./axiosClient";

export type Country = {
  name: {
    common: string;
    official: string;
  };
  independant: boolean;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  capital: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  ccn3: string;
  flag: string;
  flags: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  population: number;
};

export const getAllCountry = async () => {
  try {
    const result = await axiosClient<Country[]>("/all");
    return result.data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
