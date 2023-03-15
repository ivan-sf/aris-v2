
import { Request, Response } from "express";
import { Fisiometria } from "../entities/Fisiometria";

export const createFisiometria = async (req: Request, res: Response) => {
  try {
    const fisiometria = new Fisiometria();
    
      fisiometria.userId = req.body.userId;
      
      fisiometria.empresaId = req.body.empresaId;
      
      fisiometria.ritmoCardiaco = req.body.ritmoCardiaco;
      
      fisiometria.ritmoRespiratorio = req.body.ritmoRespiratorio;
      
      fisiometria.oximetria = req.body.oximetria;
      
      fisiometria.presionArterialSistolica = req.body.presionArterialSistolica;
      
      fisiometria.presionArterialDiastolica = req.body.presionArterialDiastolica;
      
      fisiometria.temperatura = req.body.temperatura;
      
      fisiometria.suenoSuperficial = req.body.suenoSuperficial;
      
      fisiometria.suenoProfundo = req.body.suenoProfundo;
      
      fisiometria.vecesDespierto = req.body.vecesDespierto;
      
      fisiometria.numeroPasos = req.body.numeroPasos;
      
      fisiometria.valorIndice = req.body.valorIndice;
      
      fisiometria.estandarAlarma = req.body.estandarAlarma;
      
      fisiometria.valorAlarma1 = req.body.valorAlarma1;
      
      fisiometria.valorAlarma2 = req.body.valorAlarma2;
      
      fisiometria.valorAlarma3 = req.body.valorAlarma3;
      
      fisiometria.fechaRegistro = req.body.fechaRegistro;
      
      fisiometria.fechaToma = req.body.fechaToma;
      
      fisiometria.estadoRegistro = req.body.estadoRegistro;
      
    await fisiometria.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getFisiometrias = async (req: Request, res: Response) => {
  try {
    const fisiometrias = await Fisiometria.find();
    return res.json(fisiometrias);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getFisiometriaById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const fisiometria = await Fisiometria.findOneBy({ id: id });
    if (!fisiometria) {
      return res.status(404).json({ error: "Fisiometria no encontrada" });
    }
    res.json(fisiometria);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updateFisiometria = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let fisiometria = await Fisiometria.findOneBy({ id: (id) });
      if (!fisiometria)
        return res.status(404).json({ error: "fisiometria not found" });
  
      await Fisiometria.update({ id: (id) }, req.body);
      const updatedFisiometria = await Fisiometria.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedFisiometria);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deleteFisiometria = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const fisiometria = await Fisiometria.findOneBy({ id: id });
    if (!fisiometria) {
      return res.status(404).json({ error: "Fisiometria a no encontrada" });
    }
    await fisiometria.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  