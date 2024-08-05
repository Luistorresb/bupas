export interface postConsumo {
  CODAGE: string;
  IRC: string;
  F_IRC: string;
  NITCLI: string;
  NOMCLI: string;
  NITTERC: string;
  NOMTERC: string;
  FAMBAT: string;
  CANT: number;
}
export interface deleteData {
  id: string;
  user: string;
  reason: string;
}
export interface createData {
  ids: string;
  agency: string;
}

export interface Certificate {
  NUM_CERTIF: number;
  CREACION_CERTIF: string;
  COD_AGE: string;
  NIT_CLI: string;
  NOM_CLI: string;
  NIT_TERC: string;
  NOM_TERC: string;
  IRCS: string;
}
export interface CertificateIRC {
  ITEM: boolean;
  COD_AGE: string;
  IRC: string;
  F_IRC: string;
  NIT_CLI: string;
  NOM_CLI: string;
  NIT_TERC: string;
  NOM_TERC: string;
  FAM_BAT: string;
  CANT: number;
  ID: string;
}

export interface CustomHttpErrorResponse {
  headers: {
    normalizedNames: Record<string, string>;
    lazyUpdate: null | any;
  };
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: {
    code: number;
    success: boolean;
    messages: {
      error: string;
    };
  };
}
