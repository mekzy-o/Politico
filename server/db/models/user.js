import pool from '../connection';

const createUsersTable = `DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        firstname VARCHAR(128) NOT NULL,
        lastname VARCHAR(128) NOT NULL,
        othername VARCHAR(255) NOT NULL,
        phonenumber VARCHAR(50) NOT NULL,
        passporturl VARCHAR(125) NOT NULL,
        isadmin BOOLEAN NOT NULL DEFAULT (false)
    )`;

class UserTableHandler {

    static usersTable() {
        const create = pool.query(createUsersTable)
           .then(result => console.log(`usersTable: ${result[0].command}PED and ${result[1].command}D`))
           .catch(error => console.log(`users table ${error}`));
        return create;
    }

}

const { usersTable } = UserTableHandler;

export default usersTable;