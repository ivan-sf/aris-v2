const fs = require("fs/promises");
const path = require("path");
const AppSettings = require("./global");


let entities = []

const initAris = async (fileDir) => {
  pathFile = path.join(__dirname, fileDir);
  json = await fs.readFile(pathFile, "utf8");
  json = JSON.parse(json);

  pathEntities = path.join(__dirname, "./api/entities");
  pathControllers = path.join(__dirname, "./api/controllers");
  pathSchemas = path.join(__dirname, "./api/docs/schemas");
  pathApis = path.join(__dirname, "./api/routes/api");
  dirEntities = await fs.readdir(pathEntities);

  for (let i in json) {
    entities.push(i)
    modelJson = i;
    attributes = json[i];
    aux = 0;
    dirEntities.forEach((element) => {
      modelDir = element.replace(/.ts/g, "");
      modelJson == modelDir ? aux++ : null;
    });
    aux = 0;
    outFilePath = path.join(pathEntities, `${modelJson}.ts`);
    const modelJsonLowerCase = modelJson.toLowerCase();
    outFilePathController = path.join(pathControllers, `${modelJsonLowerCase}.controller.ts`);
    outFilePathSchema = path.join(pathSchemas, `${modelJsonLowerCase}Schema.ts`);
    outFilePathApi = path.join(pathApis, `${modelJsonLowerCase}Api.ts`);
    contentEntitie = contentEntities(modelJson, attributes);
    contentController = contentControllers(modelJson, attributes);
    contentSchema = contentSchemas(modelJson, attributes);
    contentApi = contentApis(modelJson);
    await fs.writeFile(outFilePath, contentEntitie);
    await fs.writeFile(outFilePathController, contentController);
    await fs.writeFile(outFilePathSchema, contentSchema);
    await fs.writeFile(outFilePathApi, contentApi);
    console.log("Se han generado los archivos para la entidad", modelJson, "exitosamente.");
  }
  console.log("Inicie su entorno de desarrollo con el comando `npm run dev`");
  generateDB(entities);
  generateRoutes(entities);
  generateSwagger(entities);
};

const contentApis = (model) => {
  const modelLowerCase = model.toLowerCase();
  return(contentApi=`
/**
 * @openapi
 * /api/${modelLowerCase}:
 *    post:
 *      tags:
 *        - ${model}
 *      summary: "Crear un registro de petición"
 *      description: Crea un registro de peticion en PG
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/${modelLowerCase}"
 *      responses:
 *        '200':
 *          description: Registro creado exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */


/**
 * @openapi
 * /api/${modelLowerCase}:
 *    get:
 *      tags:
 *        - ${model}
 *      summary: "Listar registro de peticiones"
 *      description: Lista del registro historico de peticiones
 *      responses:
 *        '200':
 *          description: Operación exitosa
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */


/**
 * @openapi
 * /api/${modelLowerCase}/{id}:
 *    get:
 *      tags:
 *        - ${model}
 *      summary: "Consultar registro por id"
 *      description: Consulta los registros por id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Operacion exitosa
 *        '500':
 *          description: Error al realizar la consultax
 *      security:
 *       - bearerAuth: []
 */


/**
 * @openapi
 * /api/${modelLowerCase}/{id}:
 *    put:
 *      tags:
 *        - ${model}
 *      summary: "Editar registro de petición por id"
 *      description: Edita los registros de peticiónes a la api externa
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/${modelLowerCase}"
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Se ha editado exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */


/**
 * @openapi
 * /api/${modelLowerCase}/{id}:
 *    delete:
 *      tags:
 *        - ${model}
 *      summary: "Eliminar registro de petición por id"
 *      description: Elimina los registros de peticiónes a la api externa
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Se ha eliminado el registro exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Se ha eliminado el registro exitosamente
 *      security:
 *       - bearerAuth: []
 */
  
  `
  )
}

const contentSchemas = (model, attributes) => {
  // console.log("model",model)
  const modelLowerCase = model.toLowerCase();
  requiredContent = ""
  propiertiesContent = ""
  for (let j in attributes) {
    if (j !== 'OneToOne' && j !== 'ManyToOne' && j !== 'OneToMany' && j !== 'ManyToMany') {
      
      requiredContent += `"${j}",`;

      if(attributes[j] === 'Date'){
        propiertiesContent += 
      `
      ${j}: {
        type: "string",
        format: "date-time"
      },
      `
      }else{
        propiertiesContent += 
      `
      ${j}: {
        type: "${attributes[j]}",
      },
      `
      }
    }
  }
  return  (contentSchema =  
    `
export const ${modelLowerCase}Schema = {
  type: "object",
  required: [${requiredContent}],
  properties: {
    ${propiertiesContent}
  },
};
    `
    )

  
  
}

const contentControllers = (model, attributes) => {
  let columnController = ''
  const modelJsonLowerCase = modelJson.toLowerCase();

  for (let j in attributes) {
    if (j !== 'OneToOne' && j !== 'ManyToOne' && j !== 'OneToMany' && j !== 'ManyToMany') {
     columnController += `
      ${modelJsonLowerCase}.${j} = req.body.${j};
      `
    }
  }

  return  (contentController =  
    `
import { Request, Response } from "express";
import { ${model} } from "../entities/${model}";

export const create${model} = async (req: Request, res: Response) => {
  try {
    const ${modelJsonLowerCase} = new ${model}();
    ${columnController}
    await ${modelJsonLowerCase}.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const get${model}s = async (req: Request, res: Response) => {
  try {
    const ${modelJsonLowerCase}s = await ${model}.find();
    return res.json(${modelJsonLowerCase}s);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const get${model}ById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const ${modelJsonLowerCase} = await ${model}.findOneBy({ id: id });
    if (!${modelJsonLowerCase}) {
      return res.status(404).json({ error: "${model} no encontrada" });
    }
    res.json(${modelJsonLowerCase});
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const update${model} = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let ${modelJsonLowerCase} = await ${model}.findOneBy({ id: (id) });
      if (!${modelJsonLowerCase})
        return res.status(404).json({ error: "${modelJsonLowerCase} not found" });
  
      await ${model}.update({ id: (id) }, req.body);
      const updated${model} = await ${model}.findOneBy({ id: (id) });
  
      return res.status(200).json(updated${model});
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const delete${model} = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const ${modelJsonLowerCase} = await ${model}.findOneBy({ id: id });
    if (!${modelJsonLowerCase}) {
      return res.status(404).json({ error: "${model} a no encontrada" });
    }
    await ${modelJsonLowerCase}.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  `
  )
}

const contentEntities = (model, attributes) => {
  // console.log("model", model);
  // console.log("attributes", attributes);
  column = "";
  columnImports = "";
  for (let j in attributes) {
    if (j !== 'OneToOne' && j !== 'ManyToOne' && j !== 'OneToMany' && j !== 'ManyToMany') {
      nameColumn = j;
      type = attributes[j];
      column += ` 
    @Column({nullable:true})
    ${nameColumn}:${type}`;
    } else if (j === 'OneToOne') {
      for (k in attributes[j]) {
          columnImports += `import { ${attributes[j][k]} } from './${attributes[j][k]}';
`
          aux = attributes[j][k].toLowerCase()
          column += `
    @OneToOne(() => ${attributes[j][k]})
    @JoinColumn()
    ${aux}: ${attributes[j][k]}`
      }
    } else if (j === 'ManyToOne') {
      let entity
      let entityAux
      let relation
      for (k in attributes[j]) {
        for(l in attributes[j][k]){
          if(l === 'entity'){
            entity = attributes[j][k][l];
            entityAux = attributes[j][k][l].toLowerCase();
          }
          if(l === 'relation'){
            relation = attributes[j][k][l];
          }
        }

        columnImports += `import { ${entity} } from './${entity}';
`
        column += `
    @ManyToOne(() => ${entity}, (${entityAux}) => ${entityAux}.${relation})
    ${entityAux}: ${entity}
`
      }
    } else if (j === 'OneToMany') {
      let entity
      let entityAux
      let relation
      for (k in attributes[j]) {
        for(l in attributes[j][k]){
          if(l === 'entity'){
            entity = attributes[j][k][l];
            entityAux = attributes[j][k][l].toLowerCase();
          }
          if(l === 'relation'){
            relation = attributes[j][k][l];
          }
        }

        columnImports += `import { ${entity} } from './${entity}';
`
        column += `
    @OneToMany(() => ${entity}, (${entityAux}) => ${entityAux}.${relation})
    ${entityAux}: ${entity}[]
`
      }
    }else if(j === 'ManyToMany'){
      let entity
      let entityAux
      let relation
      for (k in attributes[j]) {
        for(l in attributes[j][k]){
          if(l === 'entity'){
            entity = attributes[j][k][l];
            entityAux = attributes[j][k][l].toLowerCase();
          }
          if(l === 'relation'){
            relation = attributes[j][k][l];
          }
        }
  
        columnImports += `import { ${entity} } from './${entity}';
`
  
        column += `
    @ManyToMany(() => ${entity})
    ${entityAux}: ${entity}[]
  `
    }
  }

  }
  // @PrimaryColumn({type:"uuid"})
  // @Generated("uuid") id: string;
  return (content =
    `import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'
` +
columnImports + 
    `
@Entity()

export class ${model} extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
    ` +
    column +
    `
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  `);
};

const generateDB = async (entities) => {
  outFilePath = path.join(__dirname, `api/db.ts`);
  imports = "";
  model = "";
  for (let i in entities) {
    imports += `import {${entities[i]}} from './entities/${entities[i]}'
`
    model += `${entities[i]},`
  }
  contentDataBase = `import {DataSource} from 'typeorm'
import {AppSettings} from './environment.dev'
`+
    `${imports}
`+
    `
const TYPE:any = AppSettings.TYPE
const HOSTDB = AppSettings.HOSTDB
const PORTDB:any = AppSettings.PORTDB 
const USERDB = AppSettings.USERDB
const PWDB = AppSettings.PWDB
const DB = AppSettings.DB


export const AppDataSource = new DataSource({
    type: TYPE,
    host: HOSTDB,
    port: PORTDB,
    username: USERDB,
    password: PWDB,
    database: DB,
    entities: [${model}],
    logging: true,
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})`
  await fs.writeFile(outFilePath, contentDataBase);
}

const generateRoutes = async (entities) => {
  outFilePath = path.join(__dirname, `api/routes/module.routes.ts`);
  imports = "";
  routes = "";
  // console.log("entities", entities);
  for (let i in entities) {
    const entitieLowerCase = entities[i].toLowerCase();
    imports += `
import {create${entities[i]},get${entities[i]}s,update${entities[i]},delete${entities[i]},get${entities[i]}ById} from '../controllers/${entitieLowerCase}.controller'  
    `;

    routes += 
    `
router.post('/api/${entitieLowerCase}/',create${entities[i]})
router.get('/api/${entitieLowerCase}',get${entities[i]}s)
router.get('/api/${entitieLowerCase}/:id',get${entities[i]}ById)
router.put('/api/${entitieLowerCase}/:id',update${entities[i]})
router.delete('/api/${entitieLowerCase}/:id',delete${entities[i]})
    `
  }


  content = 
  `
import {Router} from 'express'
${imports}
import SwaggerSetup from '../docs/swagger'

const router = Router()

${routes}

router.get('/docs/swagger.json', (req, res) => {
res.setHeader('Content-Type', 'application/json')
    res.send(SwaggerSetup)
})

export default router

  `
  await fs.writeFile(outFilePath, content);

}

const generateSwagger = async (entities) => {
  outFilePath = path.join(__dirname, `api/docs/swagger.ts`);

  imports = "";
  schemas = "";
  
  for (let i in entities) {
    const entitieLowerCase = entities[i].toLowerCase();

    imports += `
import { ${entitieLowerCase}Schema } from "./schemas/${entitieLowerCase}Schema";
    `;

    schemas += `
      ${entitieLowerCase}: ${entitieLowerCase}Schema,
    `
  }

  contentSwagger = 
    `
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
${imports}

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
      ${schemas}
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./api/routes/api/*"],
};

export default swaggerJSDoc(swaggerOptions);
    `
  await fs.writeFile(outFilePath, contentSwagger);
}





initAris(nameFile);

// Generar Entities ----> OK
// Generar desde consola CLI -----> OK
// Generar DB -----> OK
// Generar Controllers -----> OK
// Generar rutas api -----> OK
// Generar Schemas Swagger ------> OK
// Generar Swagger ------> OK
// Generar API CRUD Swagger
// Generar CRUD Visual --> Estilo Jhipster