import { LucideIcon } from "lucide-react";

export interface USERINFO {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  country_area: number;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: number;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: false;
  ip: string;
  languages: string;
  latitude: number;
  longitude: number;
  network: string;
  org: string;
  postal: null;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
}
export interface Message {
  content: string;
  date: string;
  id: string;
}

import {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type FormHooks = {
  register: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
  options?: RegisterOptions;
  errors: FieldErrors;
};

export interface CustomInputProps extends FormHooks {
  label: string;
  id: string;
  type?: string;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
}

export interface CustomSelectProps extends CustomInputProps {
  sels: {
    name: string;
    code?: string;
    icon?: any;
  }[];
}

export interface flyProps extends CustomSelectProps {
  placeholder?: string;
  Icon?: LucideIcon;
}

export interface InfoProps extends FormHooks {
  index: number;
  isAdult?: boolean;
  isChild?: boolean;
}
