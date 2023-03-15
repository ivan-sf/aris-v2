
import { Request, Response } from "express";
import { Empresa } from "../entities/Empresa";

export const createEmpresa = async (req: Request, res: Response) => {
  try {
    const empresa = new Empresa();
    
      empresa.nombre = req.body.nombre;
      
      empresa.nit = req.body.nit;
      
      empresa.direccion = req.body.direccion;
      
      empresa.telefono = req.body.telefono;
      
      empresa.correoElectronico = req.body.correoElectronico;
      
      empresa.fechaRegistro = req.body.fechaRegistro;
      
      empresa.estadoRegistro = req.body.estadoRegistro;
      
    await empresa.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getEmpresas = async (req: Request, res: Response) => {
  try {
    const empresas = await Empresa.find();
    return res.json(empresas);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getEmpresaById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const empresa = await Empresa.findOneBy({ id: id });
    if (!empresa) {
      return res.status(404).json({ error: "Empresa no encontrada" });
    }
    res.json(empresa);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updateEmpresa = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let empresa = await Empresa.findOneBy({ id: (id) });
      if (!empresa)
        return res.status(404).json({ error: "empresa not found" });
  
      await Empresa.update({ id: (id) }, req.body);
      const updatedEmpresa = await Empresa.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedEmpresa);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deleteEmpresa = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const empresa = await Empresa.findOneBy({ id: id });
    if (!empresa) {
      return res.status(404).json({ error: "Empresa a no encontrada" });
    }
    await empresa.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  