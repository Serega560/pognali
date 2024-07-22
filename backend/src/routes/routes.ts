import { Router } from 'express';
import { getCatalogRequests, getCountries, getPagination, handleFormSubmission } from '../controller/request-controller';
import { generateToken } from '../utils/token';

const router = Router();

router.get('/countries', getCountries);
router.post('/generate-token', (req, res) => res.json({ token: generateToken() }));
router.get('/paginate', getPagination);
router.post('/submit-form', handleFormSubmission);
router.get('/catalog', getCatalogRequests);

export default router;
