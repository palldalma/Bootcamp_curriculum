const supertest = require("supertest");
const app = require("../server.js");
const { expect } = require("chai");

describe("quiz endpoints", () => {
  it("GET /game should return ./public/gamepage.html", (done) => {
    supertest(app)
      .get("/game")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        done();
      });
  });

  it("GET /questions should return ./public/managequestions.html", (done) => {
    supertest(app)
      .get("/questions")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        done();
      });
  });

  it("GET /api/game should have a property called question", (done) => {
    supertest(app)
      .get("/api/game")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.have.property("question");
        done();
      });
  });

  it("GET /api/game should have a property called answers", (done) => {
    supertest(app)
      .get("/api/game")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.have.property("answers");
        done();
      });
  });

  it("GET /api/questions should have a property called id", (done) => {
    supertest(app)
      .get("/api/questions")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.be.a("array");
        done();
      });
  });

  it("POST /api/questions should return status 200", (done) => {
    supertest(app)
      .post("/api/questions")
      .expect(200)
      .send({
        question: "Who is the main character in 13 reasons why?",
        answers: [
          { answer_1: "Clay Jensen", is_correct: 1 },
          { answer_2: "Hannah Baker", is_correct: 0 },
          { answer_3: "Jessica Davis", is_correct: 0 },
          { answer_4: "Justin Foley", is_correct: 0 },
        ],
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });
});
