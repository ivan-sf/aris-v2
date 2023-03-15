
export const empresaSchema = {
  type: "object",
  required: ["nombre","nit","direccion","telefono","correoElectronico","fechaRegistro","estadoRegistro",],
  properties: {
    
      nombre: {
        type: "string",
      },
      
      nit: {
        type: "string",
      },
      
      direccion: {
        type: "string",
      },
      
      telefono: {
        type: "string",
      },
      
      correoElectronico: {
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
    