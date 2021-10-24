const supertest = require("supertest");
const app = require("../routes");
const { expect } = require("chai");

describe("testing groot endpoint", () => {
  it("should return status 400", (done) => {
    supertest(app) //ez gyakorlatilag küld egy http requestet az alábbi szempontok alapján
      .get("/groot")
      .expect(400)
      .end((err, res) => {
        expect(err).to.be.null; //chai syntax arra, hogy expect !== null

        done();
      });
  });

  it("should return status 200", (done) => {
    supertest(app) //ez gyakorlatilag küld egy http requestet az alábbi szempontok alapján
      .get("/groot?message=123456")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null; //chai syntax arra, hogy expect !== null

        expect(res.body).to.haveOwnProperty("translated");
        expect(res.body.received).to.equal("123456");
        expect(res.body).to.haveOwnProperty("received");
        expect(res.body.translated).to.equal("I am groot.");

        done();
      });
  });
});
