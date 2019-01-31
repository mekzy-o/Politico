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

//Unit testing for getting all offices using GET method
describe('/GET offices', () => {
  it('should list ALL offices on /api/v1/offices GET', (done) => {
    chai.request(server)
      .get(officeUrl)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });
});

//Unit testing for getting a specific office with id
describe('/GET office with specified id', () => {
  it('should return 200 for successfully fetching a office', (done) => {
    const newLength = officeDb.length;
    chai.request(server)
        .get(getOneUrl)
        .send(officeDb)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json
          done();
        });
    });
});