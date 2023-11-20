import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

/**
 * Binds the routes in the appropriate handlers
 */

const allRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default allRoutes;
