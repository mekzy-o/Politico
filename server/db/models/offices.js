import pool from '../connection';

const createOfficesTable = `DROP TABLE IF EXISTS offices CASCADE;
CREATE TABLE offices (
    id SERIAL PRIMARY KEY NOT NULL,
    type VARCHAR(128) NOT NULL,
    name VARCHAR(128) NOT NULL
)`;


class officeTableHandler {

    static officesTable() {
        const create = pool.query(createOfficesTable)
           .then(result => console.log(`officesTable: ${result[0].command}PED and ${result[1].command}D`))
           .catch(error => console.log(`offices table ${error}`));
        return create;
    }

}

const { officesTable } = officeTableHandler;

export default officesTable;