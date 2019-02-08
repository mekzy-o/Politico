import { hashSync, compareSync } from 'bcrypt';
import db from '../db/index';
import { createToken } from '../middlewares/auth';

/**
 * Class representing UserController
 * @class UserController
 */
class UserController {
  /**
     * Create Account a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success message
     * @memberof UserController
     */
  static async createAccount(req, res) {
    const variables = [
      req.body.email,
      hashSync(req.body.password, 10),
      req.body.firstname,
      req.body.lastname,
      req.body.othername,
      req.body.phonenumber,
      req.body.passporturl
    ];

    const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;
    const isValid = pattern.test(req.body.email);

    const phonePattern = /^\d{11}$/;
    const valid = phonePattern.test(req.body.phonenumber);

    const firstnamePattern = /^[a-z]{5,15}$/i;
    const validity =  firstnamePattern.test(req.body.firstname);

    const lastnamePattern = /^[a-z]{3,15}$/i;
    const lastValidity =  lastnamePattern.test(req.body.lastname);

    const othernamePattern = /^[a-z]{5,15}$/i;
    const otherValidity =  othernamePattern.test(req.body.othername);

    if(!req.body.email){
      return res.status(400).send({
      status: 400,
      error: "email is required"
    });
  } else if (!req.body.password){
    return res.status(400).send({
    status: 400,
    error: "password is required"
  });
  } else if (!req.body.firstname){
    return res.status(400).send({
    status: 400,
    error: "firstname is required"
  });
} else if (!req.body.lastname){
  return res.status(400).send({
  status: 400,
  error: "lastname is required"
  });
} else if (!req.body.othername){
  return res.status(400).send({
  status: 400,
  error: "othername is required"
  });
} else if (!req.body.phonenumber){
  return res.status(400).send({
  status: 400,
  error: "phonenumber is required"
  });
} else if (!req.body.passporturl){
  return res.status(400).send({
  status: 400,
  error: "passporturl is required"
  });
} else if (valid === false) {
   return res.status(400).send({
     status: 400,
     error: "invalid phone number"
  });
} else if (isValid === false){
  return res.status(400).send({
    status: 400,
    error: "invalid email address"
 });
} else if (validity === false){
  return res.status(400).send({
    status: 400,
    error: "invalid first name entered"
 });
} else if (lastValidity === false){
  return res.status(400).send({
    status: 400,
    error: "invalid last name entered"
 });
} else if (otherValidity === false){
  return res.status(400).send({
    status: 400,
    error: "invalid other name entered"
 });
}
    const data = 'INSERT INTO users(email, password, firstname, lastname, othername, phonenumber, passporturl) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
  
    try {
      const result = await db.query(data, variables);
      const authUser = result.rows[0];
      const token = createToken(authUser);
        return res.status(201).json({
          status: 201,
          data: authUser,
          token
        });
      } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }


  /**
     * Login a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
    static async loginAccount(req, res) {
        const variable = [req.body.email];
        const data = 'SELECT * FROM users WHERE email = $1';
        try {
          const result = await db.query(data, variable);
          if (result) {
            if (result.rowCount !== 0) {
              const comparePassword = compareSync(req.body.password, result.rows[0].password);
              if (comparePassword) {
                const authUser = result.rows[0];
                const token = createToken(authUser);
                return res.status(200).json({
                status: 200,
                 data: authUser,
                 token
                });
              }
              if (!comparePassword) {
                return res.status(401).json({
                  status: 401,
                  message: 'User authentication failed, email or password incorrect!'
                });
              }
            }
          }
        } catch (error) {
          res.status(500).json({
            status: 500,
            message: error.message
          });
        }
      }
    }
export default UserController;