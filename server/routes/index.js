import express from 'express';
import officeDb from '../datastore/officeDb';
import partyDb from '../datastore/partyDb';
import PartyController from '../controllers/PartyController';
import OfficeController from '../controllers/officeController';

const router = express.Router();

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

export default router;