
import { Request, Response } from "express";
import { PerfilUsuario } from "../entities/PerfilUsuario";

export const createPerfilUsuario = async (req: Request, res: Response) => {
  try {
    const perfilusuario = new PerfilUsuario();
    
      perfilusuario.userId = req.body.userId;
      
      perfilusuario.empresaId = req.body.empresaId;
      
      perfilusuario.edad = req.body.edad;
      
      perfilusuario.sexo = req.body.sexo;
      
      perfilusuario.pesoKG = req.body.pesoKG;
      
      perfilusuario.estaturaCM = req.body.estaturaCM;
      
      perfilusuario.condicionPrincipal = req.body.condicionPrincipal;
      
      perfilusuario.condicionSecundaria1 = req.body.condicionSecundaria1;
      
      perfilusuario.condicionSecundaria2 = req.body.condicionSecundaria2;
      
      perfilusuario.condicionSecundaria3 = req.body.condicionSecundaria3;
      
      perfilusuario.medicacion1 = req.body.medicacion1;
      
      perfilusuario.medicacion2 = req.body.medicacion2;
      
      perfilusuario.medicacion3 = req.body.medicacion3;
      
      perfilusuario.fechaRegistro = req.body.fechaRegistro;
      
      perfilusuario.estadoRegistro = req.body.estadoRegistro;
      
    await perfilusuario.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getPerfilUsuarios = async (req: Request, res: Response) => {
  try {
    const perfilusuarios = await PerfilUsuario.find();
    return res.json(perfilusuarios);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getPerfilUsuarioById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const perfilusuario = await PerfilUsuario.findOneBy({ id: id });
    if (!perfilusuario) {
      return res.status(404).json({ error: "PerfilUsuario no encontrada" });
    }
    res.json(perfilusuario);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updatePerfilUsuario = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let perfilusuario = await PerfilUsuario.findOneBy({ id: (id) });
      if (!perfilusuario)
        return res.status(404).json({ error: "perfilusuario not found" });
  
      await PerfilUsuario.update({ id: (id) }, req.body);
      const updatedPerfilUsuario = await PerfilUsuario.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedPerfilUsuario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deletePerfilUsuario = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const perfilusuario = await PerfilUsuario.findOneBy({ id: id });
    if (!perfilusuario) {
      return res.status(404).json({ error: "PerfilUsuario a no encontrada" });
    }
    await perfilusuario.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  