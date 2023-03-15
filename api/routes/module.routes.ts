
import {Router} from 'express'

import {createFisiometria,getFisiometrias,updateFisiometria,deleteFisiometria,getFisiometriaById} from '../controllers/fisiometria.controller'  
    
import {createPerfilUsuario,getPerfilUsuarios,updatePerfilUsuario,deletePerfilUsuario,getPerfilUsuarioById} from '../controllers/perfilusuario.controller'  
    
import {createCondicion,getCondicions,updateCondicion,deleteCondicion,getCondicionById} from '../controllers/condicion.controller'  
    
import {createMedicamento,getMedicamentos,updateMedicamento,deleteMedicamento,getMedicamentoById} from '../controllers/medicamento.controller'  
    
import {createEstandarAlarma,getEstandarAlarmas,updateEstandarAlarma,deleteEstandarAlarma,getEstandarAlarmaById} from '../controllers/estandaralarma.controller'  
    
import {createEmpresa,getEmpresas,updateEmpresa,deleteEmpresa,getEmpresaById} from '../controllers/empresa.controller'  
    
import SwaggerSetup from '../docs/swagger'

const router = Router()


router.post('/api/fisiometria/',createFisiometria)
router.get('/api/fisiometria',getFisiometrias)
router.get('/api/fisiometria/:id',getFisiometriaById)
router.put('/api/fisiometria/:id',updateFisiometria)
router.delete('/api/fisiometria/:id',deleteFisiometria)
    
router.post('/api/perfilusuario/',createPerfilUsuario)
router.get('/api/perfilusuario',getPerfilUsuarios)
router.get('/api/perfilusuario/:id',getPerfilUsuarioById)
router.put('/api/perfilusuario/:id',updatePerfilUsuario)
router.delete('/api/perfilusuario/:id',deletePerfilUsuario)
    
router.post('/api/condicion/',createCondicion)
router.get('/api/condicion',getCondicions)
router.get('/api/condicion/:id',getCondicionById)
router.put('/api/condicion/:id',updateCondicion)
router.delete('/api/condicion/:id',deleteCondicion)
    
router.post('/api/medicamento/',createMedicamento)
router.get('/api/medicamento',getMedicamentos)
router.get('/api/medicamento/:id',getMedicamentoById)
router.put('/api/medicamento/:id',updateMedicamento)
router.delete('/api/medicamento/:id',deleteMedicamento)
    
router.post('/api/estandaralarma/',createEstandarAlarma)
router.get('/api/estandaralarma',getEstandarAlarmas)
router.get('/api/estandaralarma/:id',getEstandarAlarmaById)
router.put('/api/estandaralarma/:id',updateEstandarAlarma)
router.delete('/api/estandaralarma/:id',deleteEstandarAlarma)
    
router.post('/api/empresa/',createEmpresa)
router.get('/api/empresa',getEmpresas)
router.get('/api/empresa/:id',getEmpresaById)
router.put('/api/empresa/:id',updateEmpresa)
router.delete('/api/empresa/:id',deleteEmpresa)
    

router.get('/docs/swagger.json', (req, res) => {
res.setHeader('Content-Type', 'application/json')
    res.send(SwaggerSetup)
})

export default router

  