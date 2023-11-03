import { Op, literal, fn, Sequelize, col, where} from 'sequelize';
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
    const countPatientsWithSameDay = await Patient.count({
      where: {[Op.ep]: literal(`DATE_PART('DAY', "created_at") = DATE_PART('DAY', CURRENT_DATE)`)},
    });
    return res.json(countPatientsWithSameDay);
  }

  // // async getSurgeriesCount(req,res) {
  // //   const surgeries = await Surgery.findAll({
  // //   attributes: 
  // //     [
  // //       [Sequelize.fn('COUNT', Sequelize.col('name')), 'count'],
  // //       'name',
  // //     ],
  // //     include: [{
  // //       model: Patient,
  // //       required: true, // INNER JOIN
        
  // //     }],
  // //    group: [Surgery.name],
  // //    })
  // //   console.log(surgeries);
  // //   return res.status(200);
  // // }

  async getPatientsForCurrentMonth(req,res) {
    const patients = await Patient.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
        Sequelize.literal('DATE_PART(\'month\', CURRENT_DATE)')
      ),
      attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
    });
    return res.json(patients);
  }

  // async getPatientsForLastMonth(req,res) {
  //   const patients = await Patient.findAll({
  //     where: Sequelize.where(
  //       Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
  //       Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 1')
  //     ),
  //     attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
  //   });
  //   return res.json(patients);
  // }

  // async getPatientsForTwoMonthsAgo(req,res) {
  //   const patients = await Patient.findAll({
  //     where: Sequelize.where(
  //       Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
  //       Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP) - 2')
  //     ),
  //     attributes: ['name', [Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')), 'mes']],
  //   });
  //   return res.json(patients);
  // }

  // async getExpensesForCurrentMonth(req,res) {
  //   const sum = await Patient.sum('expenses', {
  //     where: Sequelize.where(
  //       Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
  //       Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
  //     ),
  //   });
    
  //   return res.json(sum);
  // }

  // async getExpensesForLastMonth(req,res) {
  //   const sum = await Patient.sum('expenses', {
  //     where: {[Op.ep]: (
  //       Sequelize.fn('DATE_PART', 'month', Sequelize.col('created_at')),
  //       Sequelize.literal('DATE_PART(\'month\', CURRENT_TIMESTAMP)')
  //     )},
  //   });
  //   console.log(sum);
  //   return res.status(200);
  // }

  // async getMaxMedicHistory(req,res) {
  //   const maxmedic = await Patient.max('medic_history');
  //   return res.json(maxmedic);
  // }

//   async getTypesSurgeries(req, res) {
//     return res.json({ ok: true });
//   }

//   async getSurgeriesForThreeMonths(req, res) {
//     return res.json({ ok: true });
//   }

//   async getExpensesSurgeriesForThreeMonths(req, res) {
//     return res.json({ ok: true });
//   }


}

export default new GraficQueryController();
