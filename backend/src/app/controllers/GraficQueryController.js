import { Op, literal, fn, Sequelize, col, where, QueryTypes, query} from 'sequelize';
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


  async getPatientCountForToday(req,res) {
    const countPatientsWithSameDay = await Patient.count({
      where: {
        [Op.ep]: literal(`DATE_PART('DAY', "created_at") = DATE_PART('DAY', CURRENT_DATE)`),
        [Op.ep]: literal(`DATE_PART('MONTH', "created_at") = DATE_PART('MONTH', CURRENT_DATE)`)
      },

    });
    return res.json(countPatientsWithSameDay);
  }

  async getPatientsForCurrentMonth(req, res) {
    const patients = await Patient.findAndCountAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_DATE)')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getPatientsForLastMonth(req, res) {
    const patients = await Patient.findAndCountAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getPatientsForTwoMonthsAgo(req,res) {
    const patients = await Patient.findAndCountAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 2')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  async getExpensesForCurrentMonth(req,res) {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
      ),
    });
    return res.json(sum);
  }

  async getExpensesForLastMonth(req,res) {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) -1')
      ),
    });
    return res.json(sum);
  }

  async getExpensesForTwoMonths(req, res) {
    const sum = await Patient.sum('expenses', {
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) -2')
      ),
    });
    return res.json(sum);
  }

  async getMaxMedicHistory(req,res) {
    const maxmedic = await Patient.max('medic_history');
    const totalCount = await Patient.count('medic_history')
    return res.json({ maxmedic, totalCount });
  }

}

export default new GraficQueryController();
