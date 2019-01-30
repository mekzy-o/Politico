import express from 'express';
import partyDb from '../datastore/partyDb';
import PartyController from '../controllers/PartyController';

const router = express.Router();

//create a party
router.post('/api/v1/parties', PartyController.createParty);

export default router;