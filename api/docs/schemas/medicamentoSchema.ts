
export const medicamentoSchema = {
  type: "object",
  required: ["monograma","nombre","presentacion","laboratorio","accionTerapeutica","imagen","descripcion","habilitado","aplicacion","isStandardGel","isStandardMsps","indMuestraMedica","codAtc","atc","registroSanitario","principioActivo","uMedPrinActivo","viaAdministracion","cantidadPresentacion","valorRegistro","usuarioResponsable","fechaActualizacion","isPrivatePublic","tabla","codigo","empresaId","fechaRegistro","estadoRegistro",],
  properties: {
    
      monograma: {
        type: "string",
      },
      
      nombre: {
        type: "string",
      },
      
      presentacion: {
        type: "string",
      },
      
      laboratorio: {
        type: "string",
      },
      
      accionTerapeutica: {
        type: "string",
      },
      
      imagen: {
        type: "string",
      },
      
      descripcion: {
        type: "string",
      },
      
      habilitado: {
        type: "boolean",
      },
      
      aplicacion: {
        type: "string",
      },
      
      isStandardGel: {
        type: "string",
      },
      
      isStandardMsps: {
        type: "string",
      },
      
      indMuestraMedica: {
        type: "string",
      },
      
      codAtc: {
        type: "string",
      },
      
      atc: {
        type: "string",
      },
      
      registroSanitario: {
        type: "string",
      },
      
      principioActivo: {
        type: "string",
      },
      
      uMedPrinActivo: {
        type: "string",
      },
      
      viaAdministracion: {
        type: "string",
      },
      
      cantidadPresentacion: {
        type: "string",
      },
      
      valorRegistro: {
        type: "string",
      },
      
      usuarioResponsable: {
        type: "string",
      },
      
      fechaActualizacion: {
        type: "string",
        format: "date-time"
      },
      
      isPrivatePublic: {
        type: "string",
      },
      
      tabla: {
        type: "string",
      },
      
      codigo: {
        type: "string",
      },
      
      empresaId: {
        type: "string",
      },
      
      fechaRegistro: {
        type: "string",
        format: "date-time"
      },
      
      estadoRegistro: {
        type: "string",
      },
      
  },
};
    