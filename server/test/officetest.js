import chai from 'chai'
import chaiHttp from 'chai-http';
import app from '../../app';
import officeDb from '../datastore/officeDb';
const server = 'http://localhost:5000';
const { should } = chai;
should();

chai.use(chaiHttp);
const officeUrl = '/api/v1/offices';

const officeId1 = 1;
const officeId2 = 2;

const getOneUrl = `/api/v1/offices/${officeId1}`;

//Unit testing for Creating office using POST method
describe('/POST offices with specified details', () => {
  it('should create an office with given office details', (done) => {
    const office = {
      id: '4',
      type: 'legislative',
      name: 'speaker',
    };
    chai.request(server)
      .post(officeUrl)
      .send(office)
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});