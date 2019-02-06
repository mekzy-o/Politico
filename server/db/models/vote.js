import pool from '../connection';

const createVotesTable = `DROP TABLE IF EXISTS votes CASCADE;
CREATE TABLE votes (
    id SERIAL PRIMARY KEY NOT NULL,
    createdon TIMESTAMP,
    createdby INTEGER,
    office INTEGER,
    candidate INTEGER
)`;


class voteTableHandler {

    static votesTable() {
        const create = pool.query(createVotesTable)
           .then(result => console.log(`votesTable: ${result[0].command}PED and ${result[1].command}D`))
           .catch(error => console.log(`votes table ${error}`));
        return create;
    }

}

const { votesTable } = voteTableHandler;

export default votesTable;