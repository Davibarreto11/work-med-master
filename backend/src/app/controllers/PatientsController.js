import * as Yup from 'yup';
import Doctor from '../models/Doctor';
import Surgery from '../models/Surgery';
import Patient from '../models/Patient';
import Room from '../models/Room';

class PatientController {
  async index(req, res) {
    const { page = 1 } = req.body;
    const patient = await Patient.findAll({
      order: ['created_at'],
      attributes: ['id', 'expenses', 'status_post_operation', 'name', 'cpf', 'gender', 'adress', 'medic_history', 'contact', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Doctor,
          attributes: ['name', 'speciality'],
        },
        {
          model: Surgery,
          attributes: ['name', 'description'],
        },
        {
          model: Room,
          attributes: ['name', 'floor', 'number'],
        },
      ],
    });

    return res.json(patient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.string(),
      gender: Yup.string(),
      adress: Yup.string(),
      medic_history: Yup.string(),
      contact: Yup.string(),
      expenses: Yup.number(),
      status_post_operation: Yup.string(),
      doctor_id: Yup.number(),
      surgery_id: Yup.number(),
      room_id: Yup.number(),
    });

    if (!(await schema.validate(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const cpfExists = await Patient.findOne({ where: { cpf: req.body.cpf } });
    const contactExistis = await Patient.findOne({ where: { contact: req.body.contact } });

    if (cpfExists || contactExistis) {
      return res.status(400).json({ error: 'CPF or Cellphone already exists' });
    }

    const {
      id,
      name, cpf, gender,
      adress, medic_history,
      contact, expenses, status_post_operation,
      doctor_id, room_id, surgery_id,
    } = await Patient.create(req.body);

    return res.json({
      id,
      name,
      cpf,
      gender,
      adress,
      medic_history,
      contact,
      expenses,
      status_post_operation,
      doctor_id,
      room_id,
      surgery_id,
    });
  }

  async show(req, res) {
    const patient = await Patient.findByPk(req.params.id);
    return res.json(patient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string(),
      gender: Yup.string(),
      adress: Yup.string(),
      medic_history: Yup.string(),
      contact: Yup.string(),
      expenses: Yup.number(),
      status_post_operation: Yup.string(),
      doctor_id: Yup.number(),
      surgery_id: Yup.number(),
      room_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const patient = await Patient.findByPk(req.params.id);

    const { contact } = req.body;

    const user = await Patient.findByPk(req.userId);

    if (contact !== user.contact) {
      const contactExists = await Patient.findOne({ where: { contact } });

      if (contactExists) {
        return res.status(400).json({ error: 'Contact already exists' });
      }
    }

    await patient.update({
      name: req.body.name,
      cpf: req.body.cpf,
      gender: req.body.gender,
      adress: req.body.adress,
      expenses: req.body.expenses,
      medic_history: req.body.medic_history,
      contact: req.body.contact,
      status_post_operation: req.body.status_post_operation,
      doctor_id: req.body.doctor_id,
      room_id: req.body.room_id,
      surgery_id: req.body.surgery_id,
    });

    return res.json(patient);
  }

  async delete(req, res) {
    const patient = await Patient.findByPk(req.params.id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    patient.destroy();

    return res.json(patient);
  }
}

export default new PatientController();
