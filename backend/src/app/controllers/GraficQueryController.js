import { Op } from 'sequelize';
import Patient from '../models/Patient';
import Surgery from '../models/Surgery';

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

  async getPatientCountForToday() {
    const count = await Patient.count({
      where: {
        created_at: {
          [Op.gte]: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
    });
    return count;
  }

  async getSurgeriesCount() {
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
    return surgeries;
  }

  async getPatientsForCurrentMonth() {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return patients;
  }

  async getPatientsForLastMonth() {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return patients;
  }

  async getPatientsForTwoMonthsAgo() {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 2')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return patients;
  }

  async getExpensesForCurrentMonth() {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
      ),
    });
    return sum;
  }

  async getExpensesForLastMonth() {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
      ),
    });
    return sum;
  }

  async getMaxMedicHistory() {
    const maxMedicHistory = await Patient.max('medic_history');
    return maxMedicHistory;
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
