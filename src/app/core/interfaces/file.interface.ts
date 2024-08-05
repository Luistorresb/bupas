export interface apiArceFileBody {
  isProtected: boolean;
  originalFilename: string;
  _id: string;
  id_file: string;
  type: string;
  size: number;
  url: string;
  file: string;
  description: string;
  app_name: string;
  app_dir: string;
  user_reg: string;
  createdAt: string;
  updatedAt: string;
}
export interface apiArceFileConfig {
  app_name: string;
  description: string;
  user_reg: string;
  fileBase64: string;
  isProtected: boolean;
  encoded: 'Y' | 'N';
  extension: string;
}
export interface apiArceFileToken {
  apiKey: string | null;
  token: string | null;
}
export interface apiArceLoginResponse {
  code: string;
  status: string;
  messages?: string;
  apiKey: string | null;
  token: string | null;
}

export interface apiArceResponse<T = any> {
  code: string;
  status: string;
  messages: string;
  data?: T;
}
