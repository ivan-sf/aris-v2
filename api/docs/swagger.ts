
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

import { fisiometriaSchema } from "./schemas/fisiometriaSchema";
    
import { perfilusuarioSchema } from "./schemas/perfilusuarioSchema";
    
import { condicionSchema } from "./schemas/condicionSchema";
    
import { medicamentoSchema } from "./schemas/medicamentoSchema";
    
import { estandaralarmaSchema } from "./schemas/estandaralarmaSchema";
    
import { empresaSchema } from "./schemas/empresaSchema";
    

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {                
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {  
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      
      fisiometria: fisiometriaSchema,
    
      perfilusuario: perfilusuarioSchema,
    
      condicion: condicionSchema,
    
      medicamento: medicamentoSchema,
    
      estandaralarma: estandaralarmaSchema,
    
      empresa: empresaSchema,
    
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./api/routes/api/*"],
};

export default swaggerJSDoc(swaggerOptions);
    