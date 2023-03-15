
/**
 * @openapi
 * /api/medicamento:
 *    post:
 *      tags:
 *        - Medicamento
 *      summary: "Crear un registro de petición"
 *      description: Crea un registro de peticion en PG
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/medicamento"
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
 * /api/medicamento:
 *    get:
 *      tags:
 *        - Medicamento
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
 * /api/medicamento/{id}:
 *    get:
 *      tags:
 *        - Medicamento
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
 * /api/medicamento/{id}:
 *    put:
 *      tags:
 *        - Medicamento
 *      summary: "Editar registro de petición por id"
 *      description: Edita los registros de peticiónes a la api externa
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/medicamento"
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
 * /api/medicamento/{id}:
 *    delete:
 *      tags:
 *        - Medicamento
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
  
  