
export const perfilusuarioSchema = {
  type: "object",
  required: ["userId","empresaId","edad","sexo","pesoKG","estaturaCM","condicionPrincipal","condicionSecundaria1","condicionSecundaria2","condicionSecundaria3","medicacion1","medicacion2","medicacion3","fechaRegistro","estadoRegistro",],
  properties: {
    
      userId: {
        type: "string",
      },
      
      empresaId: {
        type: "string",
      },
      
      edad: {
        type: "string",
      },
      
      sexo: {
        type: "string",
      },
      
      pesoKG: {
        type: "number",
      },
      
      estaturaCM: {
        type: "number",
      },
      
      condicionPrincipal: {
        type: "string",
      },
      
      condicionSecundaria1: {
        type: "string",
      },
      
      condicionSecundaria2: {
        type: "string",
      },
      
      condicionSecundaria3: {
        type: "string",
      },
      
      medicacion1: {
        type: "string",
      },
      
      medicacion2: {
        type: "string",
      },
      
      medicacion3: {
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
    