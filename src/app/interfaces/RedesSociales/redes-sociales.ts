export interface RedesSociales {
  idRedes: number;
  logo: string;
  descripcion: string;
}

export interface ResponseMessageRedesSociales {
  exito: boolean;
  mensajeError: string;
  mensaje: string;
  _redesSociales?: RedesSociales[]
}
