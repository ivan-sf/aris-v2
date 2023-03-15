
export const estandaralarmaSchema = {
  type: "object",
  required: ["descripcion","procedimiento","titulo","prioridad","valorInicial","valorFinal","empresaId","fechaRegistro","estadoRegistro",],
  properties: {
    
      descripcion: {
        type: "string",
      },
      
      procedimiento: {
        type: "string",
      },
      
      titulo: {
        type: "string",
      },
      
      prioridad: {
        type: "string",
      },
      
      valorInicial: {
        type: "number",
      },
      
      valorFinal: {
        type: "number",
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
    