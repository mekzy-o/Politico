import pool from '../connection';

const createPartiesTable = `DROP TABLE IF EXISTS parties CASCADE;
CREATE TABLE parties (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(128) NOT NULL,
    hqaddress VARCHAR(128) NOT NULL,
    logourl VARCHAR(255) NOT NULL
)`;


class partyTableHandler {

    static partiesTable() {
        const create = pool.query(createPartiesTable)
           .then(result => console.log(`partiesTable: ${result[0].command}PED and ${result[1].command}D`))
           .catch(error => console.log(`parties table ${error}`));
        return create;
    }

}

const { partiesTable } = partyTableHandler;

export default partiesTable;