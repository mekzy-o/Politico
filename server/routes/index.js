import express from 'express';
import partyDb from '../datastore/partyDb';
import PartyController from '../controllers/PartyController';

const router = express.Router();

//create a party
router.post('/api/v1/parties', PartyController.createParty);

//get all parties
router.get('/api/v1/parties', PartyController.getAllParties);

//get a party using specific id
router.get('/api/v1/parties/:id', PartyController.getParty);

export default router;