export interface _periodsMapping {
  [key: string]: [string, string];
}

export interface genericCombo {
  id: string;
  name: string;
}
export interface genericComboMes {
  id: string;
  name: string;
  year: number;
}
export interface genericComboPeriod {
  id: string;
  name: string;
  dia: string;
}
export interface genericComboConfig {
  minYear?: number;
  incrementYear?: number;
  order?: 'ASC' | 'DESC';
}
export interface UserMetadata {
  active: number;
  associations: { id: string; name: string }[];
  id: string;
  name: string;
}

export interface User {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  'https://woomi.bateriaswillard.com/user_metadata': UserMetadata;
  'https://woomi.bateriaswillard.com/app_metadata': Record<string, any>;
  'https://woomi.bateriaswillard.com/roles': string[];
  'https://woomi.bateriaswillard.com/username': string;
}

export interface Menu {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export interface auth0Headers {
  'Content-Type': string;
  Authorization: string;
}
export interface AppHeaders {
  'Content-Type': string;
  idplataforma: string;
  imei: string;
  'woo-token': string;
  'wo-public-key': string;
  uid?: string;
}

export interface Business {
  id: string;
  name: string;
}

export interface PgSocketQuery {
  uid: string;
  platform_id: string | number;
  imei: string;
  nombre: string;
}

export interface apiResponse<T = any> {
  code: number;
  total: number;
  success: boolean;
  messages: Messages;
  data?: T;
}
export interface Messages {
  success?: string;
  error?: string;
}
export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
}
