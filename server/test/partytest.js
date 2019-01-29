import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import partyDb from '../datastore/partyDb';

const server = 'http://localhost:5000';

const { should } = chai;
should();

chai.use(chaiHttp);

const partyUrl = '/api/v1/parties';

const partyId1 = 1;
const partyId2 = 2;

const deleteUrl = `/api/v1/parties/${partyId1}`;
const getOneUrl = `/api/v1/parties/${partyId2}`;


describe('/POST parties', () => {
  it('should post a party with party details', (done) => {
    const party = {
      id: '7',
      name: 'Local Congress Party',
      hqAddress: '1 Femi Ayentuga Street Surulere',
      logoUrl: 'www.pcp.com',
    };
    chai.request(server)
      .post(partyUrl)
      .send(party)
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(201);
        res.should.be.json
        done();
      });
  });
});