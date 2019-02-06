import express from 'express';
import PartyController from '../controllers/PartyController';
import OfficeController from '../controllers/OfficeController';
import UserController from '../controllers/userController';
const router = express.Router();

//Setting default response by Heroku
router.get('/', (req, res) => res.status(200).json({
	message: "Welcome to API for Politico!"
}));

/* SETTING UP ENDPOINTS FOR PARTIES*/

//create a party
 router.post('/api/v1/parties', PartyController.createParty);

//get all parties
 router.get('/api/v1/parties', PartyController.getAllParties);

//get a party using specific id
 router.get('/api/v1/parties/:id', PartyController.getParty);

//deleting a party
 router.delete('/api/v1/parties/:id', PartyController.deleteParty);

//using patch method to Edit and update party name
 router.patch('/api/v1/parties/:id', PartyController.updatePartyName);

/* SETTING UP ENDPOINTS FOR OFFICES*/

//create office
router.post('/api/v1/offices', OfficeController.createOffice);

//get all offices
router.get('/api/v1/offices', OfficeController.getAllOffices);

//get a specific party
router.get('/api/v1/offices/:id', OfficeController.getOffice);

//User signup
router.post('/api/v1/auth/signup', UserController.createAccount);

export default router;