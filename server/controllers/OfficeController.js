import db from '../db/index';




class OfficeController {

   /**
   * @method createOffice
   * @description Post a given response/parameter to office database 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  
  static async createOffice (req, res) {
      if(!req.body.type){
         return res.status(400).send({
         status: 400,
         error: "type of office is required"
       });
    } else if (!req.body.name){
        return res.status(400).send({
        status: 400,
        error: "name of office is required"
      });
    }
    const { type, name } = req.body;
    const data = 'INSERT INTO offices (type, name) VALUES($1, $2) RETURNING *';

    try {
        const { rows } = await db.query(data, [type, name]);
        if (rows) {
          return res.status(201).json({
            status: 201,
            data: rows
          });
        }
    } catch(error) {
      return res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  
  }

  /**
   * @method getAllOffices
   * @description retrieves a list of all offices 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

  static async getAllOffices (req, res) {
    try {
      const { rows } = await db.query('SELECT * FROM offices ORDER BY id ASC');
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

 /* @method getOffice
   * @description retrieves an office with specific ID 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static async getOffice (req, res) {
      const data = 'SELECT * FROM offices WHERE id = $1';
      let id = parseInt(req.params.id, 10);
      try {
        const { rows } = await db.query(data, [id]);
        if(!rows[0]){
          return res.status(404).json({
            status: 404,
            error: "Office with that id not found"
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
  }



export default OfficeController;
