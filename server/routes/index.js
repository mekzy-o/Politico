import express from 'express';
import partyDb from '../datastore/partyDb';
import PartyController from '../controllers/PartyController';

const router = express.Router();

//create a party
router.post('/api/v1/parties', PartyController.createParty);

//get all parties
router.get('/api/v1/parties', PartyController.getAllParties);

export default router;