const supertest = require("supertest");
const app = require("../routes");
const { expect } = require("chai");

describe("/yondu should return 400", () => {
  it("should return status 400", (done) => {
    supertest(app)
      .get("/yondu")
      .expect(400)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.haveOwnProperty("error");

        done();
      });
  });

  it("/yondu?distance=100.0&time=20 should return status 200", (done) => {
    supertest(app)
      .get("/yondu?distance=100.0&time=20")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.haveOwnProperty("distance");

        expect(res.body).to.haveOwnProperty("time");

        done();
      });
  });
});
