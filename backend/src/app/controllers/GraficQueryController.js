import { Op } from 'sequelize';
// import { isToday } from 'date-fns';
import Patient from '../models/Patient';
// import Doctor from '../models/Doctor';

class GraficQueryController {
  async getSurgeries(req, res) {
    // const doctor = await Doctor.findByPk();
    const { count } = await Patient.findAndCountAll({
      where: {
        doctor_id: {
          [Op.eq]: req.params.id,
        },
      },
    });

    return res.json(count);
  }

  async getHealthInsurance(req, res) {
    return res.json({ ok: true });
  }

  async getSurgeriesToday(req, res) {
    const created_at = await Patient.findAll({
      attributes: ['created_at'],
    });

    const { count } = await Patient.findAndCountAll({
      where: {
        created_at: {
          [Op.lte]: new Date().getDate(),
        },
      },
    });

    // console.log(created_at.map((date) => (date.dataValues)));
    // console.log(Date.now());

    return res.json({ count, created_at });
  }

  async getTypesSurgeries(req, res) {
    return res.json({ ok: true });
  }

  async getSurgeriesForThreeMonths(req, res) {
    return res.json({ ok: true });
  }

  async getExpensesSurgeriesForThreeMonths(req, res) {
    return res.json({ ok: true });
  }
}

export default new GraficQueryController();
