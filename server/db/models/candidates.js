import pool from '../connection';

const createCandidatesTable = `DROP TABLE IF EXISTS candidates CASCADE;
CREATE TABLE candidates (
    id SERIAL PRIMARY KEY NOT NULL,
    office INTEGER NOT NULL,
    party INTEGER NOT NULL,
    candidate INTEGER NOT NULL
)`;


class candidateTableHandler {

    static candidatesTable() {
        const create = pool.query(createCandidatesTable)
           .then(result => console.log(`candidatesTable: ${result[0].command}PED and ${result[1].command}D`))
           .catch(error => console.log(`candidates table ${error}`));
        return create;
    }

}

const { candidatesTable } = candidateTableHandler;

export default candidatesTable;