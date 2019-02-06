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
}
export default UserController;