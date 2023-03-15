
import { Request, Response } from "express";
import { Condicion } from "../entities/Condicion";

export const createCondicion = async (req: Request, res: Response) => {
  try {
    const condicion = new Condicion();
    
      condicion.condicion = req.body.condicion;
      
      condicion.descripcion = req.body.descripcion;
      
      condicion.empresaId = req.body.empresaId;
      
      condicion.fechaRegistro = req.body.fechaRegistro;
      
      condicion.estadoRegistro = req.body.estadoRegistro;
      
    await condicion.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getCondicions = async (req: Request, res: Response) => {
  try {
    const condicions = await Condicion.find();
    return res.json(condicions);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getCondicionById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const condicion = await Condicion.findOneBy({ id: id });
    if (!condicion) {
      return res.status(404).json({ error: "Condicion no encontrada" });
    }
    res.json(condicion);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updateCondicion = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let condicion = await Condicion.findOneBy({ id: (id) });
      if (!condicion)
        return res.status(404).json({ error: "condicion not found" });
  
      await Condicion.update({ id: (id) }, req.body);
      const updatedCondicion = await Condicion.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedCondicion);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deleteCondicion = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const condicion = await Condicion.findOneBy({ id: id });
    if (!condicion) {
      return res.status(404).json({ error: "Condicion a no encontrada" });
    }
    await condicion.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  