import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProviderController from '../controllers/ProviderController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providerRouter = Router();

const providerController = new ProviderController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providerRouter.use(ensureAuthenticated);

// providerRouter.get('/', async (request, response) => {
//     const appointments = await appointmentsRepository.find(); // ginf == ele retorna todos os elementos do repositório.

//     return response.json(appointments)
// })

providerRouter.get('/', providerController.index);
providerRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
providerRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);
export default providerRouter;
