
import { Request, Response } from "express";
import { Medicamento } from "../entities/Medicamento";

export const createMedicamento = async (req: Request, res: Response) => {
  try {
    const medicamento = new Medicamento();
    
      medicamento.monograma = req.body.monograma;
      
      medicamento.nombre = req.body.nombre;
      
      medicamento.presentacion = req.body.presentacion;
      
      medicamento.laboratorio = req.body.laboratorio;
      
      medicamento.accionTerapeutica = req.body.accionTerapeutica;
      
      medicamento.imagen = req.body.imagen;
      
      medicamento.descripcion = req.body.descripcion;
      
      medicamento.habilitado = req.body.habilitado;
      
      medicamento.aplicacion = req.body.aplicacion;
      
      medicamento.isStandardGel = req.body.isStandardGel;
      
      medicamento.isStandardMsps = req.body.isStandardMsps;
      
      medicamento.indMuestraMedica = req.body.indMuestraMedica;
      
      medicamento.codAtc = req.body.codAtc;
      
      medicamento.atc = req.body.atc;
      
      medicamento.registroSanitario = req.body.registroSanitario;
      
      medicamento.principioActivo = req.body.principioActivo;
      
      medicamento.uMedPrinActivo = req.body.uMedPrinActivo;
      
      medicamento.viaAdministracion = req.body.viaAdministracion;
      
      medicamento.cantidadPresentacion = req.body.cantidadPresentacion;
      
      medicamento.valorRegistro = req.body.valorRegistro;
      
      medicamento.usuarioResponsable = req.body.usuarioResponsable;
      
      medicamento.fechaActualizacion = req.body.fechaActualizacion;
      
      medicamento.isPrivatePublic = req.body.isPrivatePublic;
      
      medicamento.tabla = req.body.tabla;
      
      medicamento.codigo = req.body.codigo;
      
      medicamento.empresaId = req.body.empresaId;
      
      medicamento.fechaRegistro = req.body.fechaRegistro;
      
      medicamento.estadoRegistro = req.body.estadoRegistro;
      
    await medicamento.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getMedicamentos = async (req: Request, res: Response) => {
  try {
    const medicamentos = await Medicamento.find();
    return res.json(medicamentos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getMedicamentoById = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const medicamento = await Medicamento.findOneBy({ id: id });
    if (!medicamento) {
      return res.status(404).json({ error: "Medicamento no encontrada" });
    }
    res.json(medicamento);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const updateMedicamento = async (req: Request, res: Response) => {
    try {
      const id:any  = req.params;
      let medicamento = await Medicamento.findOneBy({ id: (id) });
      if (!medicamento)
        return res.status(404).json({ error: "medicamento not found" });
  
      await Medicamento.update({ id: (id) }, req.body);
      const updatedMedicamento = await Medicamento.findOneBy({ id: (id) });
  
      return res.status(200).json(updatedMedicamento);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
};
  
  


export const deleteMedicamento = async (req: Request, res: Response) => {
  try {
    const id:any  = req.params;
    const medicamento = await Medicamento.findOneBy({ id: id });
    if (!medicamento) {
      return res.status(404).json({ error: "Medicamento a no encontrada" });
    }
    await medicamento.remove();
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

  