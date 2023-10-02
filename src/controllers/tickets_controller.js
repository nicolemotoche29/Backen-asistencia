import Tickets from "../models/tickets.js";
import mongoose from "mongoose";

const listarTicket = async (req, res) => {
  try {
    const tickets = await Tickets.find({ estado: true })
      .select("-salida -createdAt -updatedAt -__v")
      .populate('tecnicos', 'nombre apellido')
      .populate('clientes', 'nombre direccion');
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const detalleTicket = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el ticket ${id}` });

    const ticket = await Tickets.findById(id)
      .select("-createdAt -updatedAt -__v")
      .populate('tecnicos', 'nombre apellido')
      .populate('clientes', 'nombre direccion');

    if (!ticket) {
      return res.status(404).json({ msg: `Lo sentimos, no existe el ticket ${id}` });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const registrarTicket = async (req, res) => {
  try {
    if (!req.body.tecnicos || !req.body.clientes) {
      return res.status(400).json({ msg: "Lo sentimos, debes asignar tecnicos y clientes" });
    }

    const nuevaTicket = new Tickets(req.body);
    await nuevaTicket.save();
    res.status(200).json({ msg: "Registro exitoso de el ticket" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const actualizarTicket = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body.tecnicos || !req.body.clientes) {
      return res.status(400).json({ msg: "Lo sentimos, debes asignar tecnicos y clientes" });
    }

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el ticket ${id}` });

    await Tickets.findByIdAndUpdate(id, req.body);
    res.status(200).json({ msg: "Actualización exitosa del ticket" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const eliminarTicket = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `Lo sentimos, no existe el ticket ${id}` });

    await Tickets.findByIdAndRemove(id);
    res.status(200).json({ msg: "Ticket eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export {
  listarTicket,
  detalleTicket,
  registrarTicket,
  actualizarTicket,
  eliminarTicket
};
