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
    const office = {
    	id: officeDb.length + 1,
    	type: req.body.type,
    	name: req.body.name
    }
    officeDb.push(office);
    return res.status(201).send({
    	status: 201,
    	message: "Office added successfully",
    	office
   	});
  }
}

export default OfficeController;