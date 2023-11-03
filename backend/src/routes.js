import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SurgeryController from './app/controllers/SurgeryController';
import PatientsController from './app/controllers/PatientsController';
import DoctorController from './app/controllers/DoctorController';
import RoomController from './app/controllers/RoomController';
import RoleController from './app/controllers/RoleController';
import GraficQueryController from './app/controllers/GraficQueryController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/roles', RoleController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/surgeries', SurgeryController.store);
routes.get('/surgeries', SurgeryController.index);
routes.put('/surgeries/:id', SurgeryController.update);
routes.patch('/surgeries/:id', SurgeryController.show);
routes.delete('/surgeries/:id', SurgeryController.delete);

routes.post('/patients', PatientsController.store);
routes.get('/patients', PatientsController.index);
routes.put('/patients/:id', PatientsController.update);
routes.patch('/patients/:id', PatientsController.show);
routes.delete('/patients/:id', PatientsController.delete);



// routes.get('/graficquerys/today', GraficQueryController.getSurgeriesToday);
routes.patch('/graficquerys/surgeries/types/:id', GraficQueryController.getTypesSurgeries);
routes.patch('/graficquerys/surgeries', GraficQueryController.getSurgeriesForThreeMonths);
routes.patch('/graficquerys/expenses', GraficQueryController.getExpensesSurgeriesForThreeMonths);

routes.get('/doctors', DoctorController.index);
routes.patch('/doctors/:id', DoctorController.show);
routes.put('/doctors/:id', DoctorController.update);
routes.delete('/doctors/:id', DoctorController.delete);

routes.post('/rooms', RoomController.store);
routes.get('/rooms', RoomController.index);
routes.patch('/rooms/:id', RoomController.patch);
routes.put('/rooms/:id', RoomController.update);
routes.delete('/rooms/:id', RoomController.delete);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);


routes.patch('/graficquerys/doctor/:id', GraficQueryController.getSurgeries);
// routes.get('/graficquerys/patients', GraficQueryController.getPatientCountForToday);
// routes.get('/graficquerys/surgeriescount', GraficQueryController.getSurgeriesCount);
// routes.get('/graficquerys/patientsformonth',GraficQueryController.getPatientsForCurrentMonth);
// routes.get('/graficquerys/patientslastmonth',GraficQueryController.getPatientsForLastMonth);
// routes.get('/graficquerys/patientstwomonth',GraficQueryController.getPatientsForTwoMonthsAgo);
// routes.get('/graficquerys/medichistory',GraficQueryController.getMaxMedicHistory);
// routes.patch('/graficquerys/typessurgeries',GraficQueryController.getTypesSurgeries);
// routes.get('/graficquerys/expensesforlastmonth',GraficQueryController.getExpensesForLastMonth);



export default routes;
