export interface Pedido {
  COMP: string;
  CLIENTE: string;
  FECHA_PEDIDO: string;
  FECHA_FACTURA: string;
  PEDIDO: number;
  FACTURA: string;
  OC: string;
  TRANSPORTADOR: string;
  ESTADO: string;
}
export interface Invoice {
  IL_LINE: number;
  IL_DESC: string;
  IL_QORD: number;
  IL_EXTP: string;
}
