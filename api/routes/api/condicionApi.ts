
/**
 * @openapi
 * /api/condicion:
 *    post:
 *      tags:
 *        - Condicion
 *      summary: "Crear un registro de petición"
 *      description: Crea un registro de peticion en PG
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/condicion"
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
 * /api/condicion:
 *    get:
 *      tags:
 *        - Condicion
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
 * /api/condicion/{id}:
 *    get:
 *      tags:
 *        - Condicion
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
 * /api/condicion/{id}:
 *    put:
 *      tags:
 *        - Condicion
 *      summary: "Editar registro de petición por id"
 *      description: Edita los registros de peticiónes a la api externa
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/condicion"
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
 * /api/condicion/{id}:
 *    delete:
 *      tags:
 *        - Condicion
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
  
  