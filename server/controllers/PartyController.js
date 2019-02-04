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

    const data = [{
      id: partyDb.length + 1,
      name: req.body.name,
      hqAddress: req.body.hqAddress
    }]
    partyDb.push(data);
    return res.status(201).send({
    status: 201,
    message: "party added successfully",
    data
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
    data: partyDb
    });
  }

  /**
   * @method getParty
   * @description retrieves party with specific ID 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static getParty (req, res) {
      const { id } = req.params;
      let data = partyDb.find(data => data.id == id);
        if (data) {
          return res.status(200).send({
          status: 200,
          message: "party retrieved successfully",
          data: [data]
          });
      } else {
          res.status(400).send({
          error: "no party found with that id"
          });
      }
    }


  /**
   * @method deleteParty
   * @description deletes a specific party based on the given ID
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
   static deleteParty (req, res) {
      let id = req.params.id;

      let data = partyDb.filter( data => {
      return data.id == id;
      })[0];

      const index = partyDb.indexOf(data);

      if(index !== -1){

      partyDb.splice(index, 1);

      res.status(200).json({ 
        status: 200,
        data: [{message: `Party with id ${id} deleted.`}]});
      } else {
        res.status(201).json({ 
        message: `Party with id ${id} not found.`});
      }
  }
  
  /**
   * @method updatePartyName
   * @description Updates a specific party based on the given parameters
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static updatePartyName (req, res) {
      const { id } = req.params;
      const data = partyDb.find(data=> data.id == id);
      if(data){
        data.name = req.body.name;
        return res.status(201).send({
        status: 201,
        message: "party name updated successfully",
        data: [data]
      });
    } else {
        return res.status(404).send({
        status: 404,
        error: "name of party not found!"
      });
    }
  }

}

export default PartyController;
