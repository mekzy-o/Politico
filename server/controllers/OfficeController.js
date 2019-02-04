import officeDb from '../datastore/officeDb';

class OfficeController {

   /**
   * @method createOffice
   * @description Post a given response/parameter to office database 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  
  static createOffice (req, res) {
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
    const data = [{
    id: officeDb.length + 1,
    type: req.body.type,
    name: req.body.name
    }]
    officeDb.push(data);
    return res.status(201).send({
    status: 201,
    message: "Office added successfully",
    data
   });
 }

  /**
   * @method getAllOffices
   * @description retrieves a list of all offices 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

  static getAllOffices (req, res) {
    res.status(200).send({
    status: 200,
    message: "Offices retrieved successfully",
    data: officeDb
    });
  }

 /* @method getOffice
   * @description retrieves an office with specific ID 
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static getOffice (req, res) {
      const { id } = req.params;
      let data = officeDb.find(data => data.id == id);
      if (data) {
          return res.status(200).send({
          status: 200,
          message: "party retrieved successfully",
          data: [data]
          });
      } else {
          res.status(404).send({
          error: "No Office found with that id"
          });
       }
    }
}

export default OfficeController;