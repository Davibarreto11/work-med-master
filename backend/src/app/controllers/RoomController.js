import * as Yup from 'yup';
import Room from '../models/Room';

class RoomController {
  async index(req, res) {
    const room = await Room.findAll({
      attributes: ['id', 'name', 'floor', 'number', 'created_at'],
    });

    return res.json(room);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      floor: Yup.string(),
      number: Yup.string(),
    });

    if (!(await schema.validate(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const rooms = await Room.findAll({ where: { floor: req.body.floor } });

    const roomExists = rooms.find((room) => room.number === Number(req.body.number));

    if (roomExists) {
      return res.status(400).json({ error: 'Room already exists' });
    }

    const {
      id, name, floor, number,
    } = await Room.create(req.body);

    return res.json({
      id,
      name,
      floor,
      number,
    });
  }

  async patch(req, res) {
    const room = await Room.findByPk(req.params.id);

    return res.json(room);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      floor: Yup.string().required(),
      number: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const room = await Room.findByPk(req.params.id);

    await room.update({
      name: req.body.name,
      floor: req.body.floor,
      room: req.body.number,
    });

    return res.json(room);
  }

  async delete(req, res) {
    const room = await Room.findByPk(req.params.id);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    room.destroy();

    return res.json(room);
  }
}

export default new RoomController();
