const supertest = require("supertest");
const app = require("../app");
const { expect } = require("chai");

describe("GET /user", () => {
  it("should return a valid user", (done) => {
    supertest(app) //ez gyakorlatilag küld egy http requestet az alábbi szempontok alapján
      .get("/user")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null; //chai syntax arra, hogy expect !== null

        expect(res.body.name).to.equal("tobi");

        done();
      });
  });
});
