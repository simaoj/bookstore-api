const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const sinon = require('sinon');
const UserController = require('../controllers/user.controller')

chai.should();
chai.use(chaiHttp);

const defaultUser = {
  first_name: "Name",
  last_name: "Last Name",
  email: "email@email.com",
  password: "user123"
};

let token;

chai.request(server)
  .post('/api/v1/users/register')
  .send(defaultUser)
  .end((err, response) => {
    response.should.have.status(200);
  });

chai.request(server)
  .post('/api/v1/users/login')
  .send(defaultUser)
  .end((err, res) => {
    token = res.body.token;
    console.log(res.body)
  });

describe("Books API", () => {
  describe("GET /api/v1/books/", () => {
    it("should get all the books", (done) => {
      chai.request(server)
        .get('/api/v1/books/')
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    })
  });
});