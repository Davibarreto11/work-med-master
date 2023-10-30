import { Op } from 'sequelize';
import Patient from '../models/Patient';
import Surgery from '../models/Surgery';
import Doctor from '../models/Doctor';

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

  async getPatientCountForToday(req,res) {
    // const doctor = await Doctor.findByPk();
    const countPatientsWithSameDay = await Patient.count({
      where: {[op.ep]: req.Sequelize.literal(`DATE_PART('DAY', "created_at") = DATE_PART('DAY', CURRENT_DATE)`)},
    });

    return res.json(countPatientsWithSameDay);
  }

  async getSurgeriesCount(res) {
    const surgeries = await Surgery.findAll({
      include: [
        {
          model: Patient,
          as: 'patients',
          attributes: [],
        },
      ],
      group: ['Surgeries.name'],
      attributes: [
        'name',
        [Sequelize.fn('COUNT', Sequelize.col('patients.name')), 'patient_count'],
      ],
    });
    return res.json(surgeries);
  }

  async getPatientsForCurrentMonth(res) {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getPatientsForLastMonth(res) {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getPatientsForTwoMonthsAgo(res) {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 2')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getExpensesForCurrentMonth(res) {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
      ),
    });
    return res.json(sum);
  }

  async getExpensesForLastMonth(res) {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
      ),
    });
    return res.json(sum);
  }

  async getMaxMedicHistory(res) {
     const maxMedicHistory = await Patient.findOne({
    attributes: [
      [sequelize.fn('max', sequelize.col('medic_history'))]
    ]
  });
    return res.json(maxMedicHistory.get('total_registros'));
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
