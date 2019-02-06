import usersTable from './user';
import partiesTable from './parties';
import officesTable from './offices';
import candidatesTable from './candidates';
import votesTable from './vote';
import createAdmin from './admin';

usersTable()
    .then(() => createAdmin()
        .then(() => partiesTable()
            .then(() => officesTable()
                .then(()=> candidatesTable()
                    .then(() => votesTable())))))
    .catch(error => console.log(error));