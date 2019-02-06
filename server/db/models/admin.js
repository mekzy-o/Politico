import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../connection';

dotenv.config();

const queryTable = 'INSERT INTO users (email, password, firstname, lastname, othername, phonenumber, passporturl, isadmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

const password = process.env.PASSWORD;

const saltRounds = 10;

const newPassword = bcrypt.hashSync(password, saltRounds);

const email = process.env.EMAIL;

const variables = [email, newPassword, 'Seun', 'Osinbajo', 'Obinna', '08132567890', 'www.passporturl.com', true];

class InsertAdminHandler {


    static createAdmin() {
        const create = pool.query(queryTable, variables)
        .then((result => console.log(`Admin account ${result.command}ED`)))
        .catch((error) => {
            console.log(error);
        });
        return create;
    }
}

const { createAdmin } = InsertAdminHandler;

export default createAdmin;

