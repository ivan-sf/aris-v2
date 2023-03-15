
import { Request, Response } from "express";
import { EstandarAlarma } from "../entities/EstandarAlarma";

export const createEstandarAlarma = async (req: Request, res: Response) => {
  try {
    const estandaralarma = new EstandarAlarma();
    
      estandaralarma.descripcion = req.body.descripcion;
      
      estandaralarma.procedimiento = req.body.procedimiento;
      
      estandaralarma.titulo = req.body.titulo;
      
      estandaralarma.prioridad = req.body.prioridad;
      
      estandaralarma.valorInicial = req.body.valorInicial;
      
      estandaralarma.valorFinal = req.body.valorFinal;
      
      estandaralarma.empresaId = req.body.empresaId;
      
      estandaralarma.fechaRegistro = req.body.fechaRegistro;
      
      estandaralarma.estadoRegistro = req.body.estadoRegistro;
      
    await estandaralarma.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getEstandarAlarmas = async (req: Request, res: Response) => {
  try {
    const estandaralarmas = await EstandarAlarma.find();
    return res.json(estandaralarmas);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getEstandarAlarmaById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const estandaralarma = await EstandarAlarma.findOneBy({ id: id });
    if (!estandaralarma) {
      return res.status(404).json({ error: "EstandarAlarma no encontrada" });
    }
    res.json(estandaralarma);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updateEstandarAlarma = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let estandaralarma = await EstandarAlarma.findOneBy({ id: (id) });
      if (!estandaralarma)
        return res.status(404).json({ error: "estandaralarma not found" });
  
      await EstandarAlarma.update({ id: (id) }, req.body);
      const updatedEstandarAlarma = await EstandarAlarma.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedEstandarAlarma);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deleteEstandarAlarma = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const estandaralarma = await EstandarAlarma.findOneBy({ id: id });
    if (!estandaralarma) {
      return res.status(404).json({ error: "EstandarAlarma a no encontrada" });
    }
    await estandaralarma.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  