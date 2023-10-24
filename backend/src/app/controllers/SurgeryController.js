import * as Yup from 'yup';
import Surgery from '../models/Surgery';

class SurgeryController {
  async index(req, res) {
    const surgery = await Surgery.findAll({
      attributes: ['id', 'name', 'description'],
    });

    return res.json(surgery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.validate(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const surgeryExists = await Surgery.findOne({ where: { name: req.body.name } });

    if (surgeryExists) {
      return res.status(400).json({ error: 'surgery already registered' });
    }

    const {
      id, name, description,
    } = await Surgery.create(
      req.body,
    );

    return res.json({
      id,
      name,
      description,
    });
  }

  async show(req, res) {
    const surgery = await Surgery.findByPk(req.params.id);

    return res.json(surgery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const surgery = await Surgery.findByPk(req.params.id);

    surgery.update({
      name: req.body.name,
      description: req.body.description,
    });

    return res.json(surgery);
  }

  async delete(req, res) {
    const surgery = await Surgery.findByPk(req.params.id);

    if (!surgery) {
      return res.status(404).json({ error: 'Surgery not found' });
    }

    surgery.destroy();

    return res.json(surgery);
  }
}

export default new SurgeryController();
