/* eslint-disable class-methods-use-this */
import partyDb from '../datastore/partyDb';

/**
 * @class PartyController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports PartyController
 */
class PartyController {

   /**
   * @method createParty
   * @description Post a given response/parameter to party database 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static createParty (req, res) {
      if(!req.body.name){
        return res.status(400).send({
        status: 400,
        error: "name of party is required"
        });
      } else if (!req.body.hqAddress){
          return res.status(400).send({
          status: 400,
          error: "hqAddress of party is required"
      });
    }

    const party = {
      id: partyDb.length + 1,
      name: req.body.name,
      hqAddress: req.body.hqAddress
    }
    partyDb.push(party);
    return res.status(201).send({
    status: 201,
    message: "party added successfully",
    party
    });
  }

  /**
   * @method getAllParties
   * @description retrieves a list of all Parties
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static getAllParties (req, res) {
    res.status(200).send({
    status: 200,
    message: "parties retrieved successfully",
    parties: partyDb
    });
  }
}

export default PartyController;
