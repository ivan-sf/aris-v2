
export const condicionSchema = {
  type: "object",
  required: ["condicion","descripcion","empresaId","fechaRegistro","estadoRegistro",],
  properties: {
    
      condicion: {
        type: "string",
      },
      
      descripcion: {
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
    