/* eslint-disable class-methods-use-this */
import db from '../db/index';

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
  static async createParty (req, res) {

    const pattern = /^[a-z]{3,40}$/i;
    const isValid =  pattern.test(req.body.name);

    const hqPattern = /^[a-z]{3,50}$/i;
    const validity =  hqPattern.test(req.body.hqaddress);

    const logoPattern = /^[a-z]{3,20}$/i;
    const valid =  logoPattern.test(req.body.logourl);


      if(!req.body.name){
        return res.status(400).send({
        status: 400,
        error: "name of party is required"
        });
      } else if (!req.body.hqaddress){
          return res.status(400).send({
          status: 400,
          error: "hqAddress of party is required"
      });
    }  else if (!req.body.logourl){
      return res.status(400).send({
      status: 400,
      error: "Logo Url of party is required"
  });
} else if (validity === false){
  return res.status(400).send({
    status: 400,
    error: "invalid hqaddress entered"
 });
}  else if (isValid === false){
  return res.status(400).send({
    status: 400,
    error: "invalid name of party entered"
 });
} else if (valid === false){
  return res.status(400).send({
    status: 400,
    error: "invalid logourl of party entered"
 });
}

    const data = 'INSERT INTO parties(name, hqaddress, logourl) VALUES($1, $2, $3) RETURNING *'; 
    const { name, hqaddress, logourl } = req.body;
    try {
      const { rows } = await db.query(data, [name, hqaddress, logourl]);
       if (rows) {
        return res.status(201).json({
          status: 201,
          data: rows
        });
      }
    } catch (error) {
        return res.status(500).json({
          status: 500,
          message: error.message
        });
      }
    }

  /**
   * @method getAllParties
   * @description retrieves a list of all Parties
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

  static async getAllParties (req, res) {
    try {
      const { rows } = await db.query('SELECT * FROM parties ORDER BY id ASC');
      return res.status(200).json({
        status: 200,
        data: rows
        });
     } catch(error) {
        const { message } = error;
          return res.status(500).json({
           status: 500,
           message
      });
    }
  }

  /**
   * @method getParty
   * @description retrieves party with specific ID 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static async getParty (req, res) {
    const data = 'SELECT * FROM parties WHERE id = $1';
      let id = parseInt(req.params.id, 10);
      try {
        const { rows } = await db.query(data, [id]);
        if(!rows[0]){
          return res.status(404).json({
            status: 404,
            error: "Party with that id not found"
          });
        } 
        return res.status(200).json({
            status: 200,
            data: [rows[0]]
        });
      } catch(error) {
        const { message } = error;
        return res.status(500).json({
          status: 500,
          message
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
   static async deleteParty (req, res) {
     const id = parseInt(req.params.id, 10);
     const data = 'DELETE FROM parties WHERE id = $1';
     try {
      const { rows } = await db.query(data, [id]);
      if(rows){
        return res.status(200).json({
          status: 200,
          message: "Party with id deleted"
        });
      }
        return res.status(404).json({
          status: 404,
          error: "Party with that id not found"
        });

    } catch(error) {
      const { message } = error;
      return res.status(500).json({
        status: 500,
        message
      });
    }
  }
  
  /**
   * @method updatePartyName
   * @description Updates a specific party based on the given parameters
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

  static async updatePartyName (req, res) {
      let id = parseInt(req.params.id, 10);
      const { name } = req.body;
      const findData = 'SELECT * FROM parties WHERE id=$1';
      const data = 'UPDATE parties SET name = $1 WHERE id = $2';
      try {
        const { rows } = await db.query(findData,  [id]);
        console.log(rows);
        if(!rows[0]){
          return res.status(404).json({
            status: 404,
            message: "Party with id not found" 
          });
        } 
        const values = [
          req.body.name,
          id
        ];
        const result = await db.query(data, values);
        console.log(result);
        if(result.rowCount === 1){
        return res.status(200).json({
            status: 200,
            message: "Name updated successfully"
        });
      } 
    } catch(error) {
        const { message } = error;
        return res.status(500).json({
          status: 500,
          message
        });
      }
   }
}

export default PartyController;
