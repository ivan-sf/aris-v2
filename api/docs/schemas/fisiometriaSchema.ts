
export const fisiometriaSchema = {
  type: "object",
  required: ["userId","empresaId","ritmoCardiaco","ritmoRespiratorio","oximetria","presionArterialSistolica","presionArterialDiastolica","temperatura","suenoSuperficial","suenoProfundo","vecesDespierto","numeroPasos","valorIndice","estandarAlarma","valorAlarma1","valorAlarma2","valorAlarma3","fechaRegistro","fechaToma","estadoRegistro",],
  properties: {
    
      userId: {
        type: "string",
      },
      
      empresaId: {
        type: "string",
      },
      
      ritmoCardiaco: {
        type: "number",
      },
      
      ritmoRespiratorio: {
        type: "number",
      },
      
      oximetria: {
        type: "number",
      },
      
      presionArterialSistolica: {
        type: "number",
      },
      
      presionArterialDiastolica: {
        type: "number",
      },
      
      temperatura: {
        type: "number",
      },
      
      suenoSuperficial: {
        type: "number",
      },
      
      suenoProfundo: {
        type: "number",
      },
      
      vecesDespierto: {
        type: "number",
      },
      
      numeroPasos: {
        type: "number",
      },
      
      valorIndice: {
        type: "number",
      },
      
      estandarAlarma: {
        type: "string",
      },
      
      valorAlarma1: {
        type: "number",
      },
      
      valorAlarma2: {
        type: "number",
      },
      
      valorAlarma3: {
        type: "number",
      },
      
      fechaRegistro: {
        type: "string",
        format: "date-time"
      },
      
      fechaToma: {
        type: "string",
        format: "date-time"
      },
      
      estadoRegistro: {
        type: "string",
      },
      
  },
};
    