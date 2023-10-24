import * as Yup from 'yup';
import Doctor from '../models/Doctor';

class DoctorController {
  async index(req, res) {
    const doctor = await Doctor.findAll({
      attributes: [
        'id',
        'name',
        'speciality',
        'cpf',
        'gender',
        'adress',
        'crm',
        'createdAt',
      ],
    });

    return res.json(doctor);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.number(),
      gender: Yup.string(),
      adress: Yup.string(),
      speciality: Yup.string(),
      crm: Yup.string(),
    });

    if (!(await schema.validate(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const crmExists = await Doctor.findOne({ where: { crm: req.body.crm } });
    const cpfExists = await Doctor.findOne({ where: { cpf: req.body.cpf } });

    if (crmExists || cpfExists) {
      return res.status(400).json({ error: 'CRM or CPF alredy existis' });
    }

    const {
      id, name,
      speciality,
      cpf, gender,
      adress, crm,
    } = await Doctor.create(req.body);

    return res.json({
      id,
      name,
      speciality,
      cpf,
      gender,
      adress,
      crm,
    });
  }

  async show(req, res) {
    const doctor = await Doctor.findByPk(req.params.id);

    return res.json(doctor);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.number().integer().min(11).nullable(),
      gender: Yup.string().nullable(),
      adress: Yup.string().nullable(),
      speciality: Yup.string().nullable(),
      crm: Yup.string().min(8).nullable(),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const doctor = await Doctor.findByPk(req.params.id);

    await doctor.update(req.body);

    const {
      name, cpf, gender, adress, speciality, crm,
    } = await Doctor.findByPk(req.params.id);

    return res.json({
      name,
      cpf,
      gender,
      adress,
      speciality,
      crm,
    });
  }

  async delete(req, res) {
    const doctor = await Doctor.findByPk(req.params.id);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctor.destroy();

    return res.json(doctor);
  }
}

export default new DoctorController();
