// tecnicos_controller.js
import Tecnico from '../models/tecnicos.js';
import mongoose from 'mongoose';

// Controladores para tecnicos
const listarTecnicos = async (req, res) => {
  try {
    const tecnicos = await Tecnico.find({});
    res.status(200).json(tecnicos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
}; 

const detalleTecnico = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el tecnico ${id}` });

    const tecnico = await Tecnico.findById(id);
    if (!tecnico) {
      return res.status(404).json({ msg: `Lo sentimos, no existe el tecnico ${id}` });
    }

    res.status(200).json(tecnico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const registrarTecnico = async (req, res) => {
  try {
    if (Object.values(req.body).includes(''))
      return res.status(400).json({ msg: 'Lo sentimos, debes llenar todos los campos' });

    const nuevoTecnico = new Tecnico(req.body);
    await nuevoTecnico.save();
    res.status(200).json({ msg: 'Registro exitoso del tecnico' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const actualizarTecnico = async (req, res) => {
  const { id } = req.params;
  try {
    if (Object.values(req.body).includes(''))
      return res.status(400).json({ msg: 'Lo sentimos, debes llenar todos los campos' });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el tecico ${id}` });

    await Tecnico.findByIdAndUpdate(id, req.body);
    res.status(200).json({ msg: 'Actualización exitosa del tecnico' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const eliminarTecnico = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el tecnico ${id}` });

    await Tecnico.findByIdAndRemove(id);
    res.status(200).json({ msg: 'Tecnico eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

export {
  listarTecnicos,
  detalleTecnico,
  registrarTecnico,
  actualizarTecnico,
  eliminarTecnico,
};
