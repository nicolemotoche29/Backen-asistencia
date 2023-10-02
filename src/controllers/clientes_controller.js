import Cliente from '../models/clientes.js';
import mongoose from 'mongoose';

const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
}; 

const detalleCliente = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el cliente ${id}` });

    const cliente = await Cliente.findById(id);
    if (!cliente) {
      return res.status(404).json({ msg: `Lo sentimos, no existe el cliente ${id}` });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const registrarCliente = async (req, res) => {
  try {
    if (Object.values(req.body).includes(''))
      return res.status(400).json({ msg: 'Lo sentimos, debes llenar todos los campos' });

    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(200).json({ msg: 'Registro exitoso del cliente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    if (Object.values(req.body).includes(''))
      return res.status(400).json({ msg: 'Lo sentimos, debes llenar todos los campos' });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el cliente ${id}` });

    await Cliente.findByIdAndUpdate(id, req.body);
    res.status(200).json({ msg: 'Actualización exitosa del cliente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

const eliminarCliente= async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el cliente ${id}` });

    await Cliente.findByIdAndRemove(id);
    res.status(200).json({ msg: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

export {
  listarClientes,
  detalleCliente,
  registrarCliente,
  actualizarCliente,
  eliminarCliente,
};
