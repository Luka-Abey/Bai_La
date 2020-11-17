// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const { describe, it } = require('mocha');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("api", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all comments record", (done) => {
             chai.request(app)
                 .get('/api')
                 .end((err, res) => {
                     done();
                  });
         });

         it("should get all comments record", (done) => {
            chai.request(app)
                .get('/api/comments')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get all bookings record", (done) => {
            chai.request(app)
                .get('/api/bookings')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get all screenings record", (done) => {
            chai.request(app)
                .get('/api/screenings')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get all movies record", (done) => {
            chai.request(app)
                .get('/api/movies')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get a single comment record", (done) => {
             const id = '5f48e13c5249083458e4682c';
             chai.request(app)
                 .get(`/api/comments/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

         it("should get a single screening record", (done) => {
            const id = 'Parasite';
            chai.request(app)
                .get(`/api/screenings/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get a single booking record", (done) => {
            const id = '5f564961fd63a9546c1107bc';
            chai.request(app)
                .get(`/api/bookings/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                 });
        });

        it("should get a single movie record", (done) => {
            const id = '5f48e13c5249083458e4682c';
            chai.request(app)
                .get(`/api/movies/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
    });
});

describe("api", () => {
    describe("POST /", () => {
        it('it should POST a comment ', (done) => {
            let comment = {
                commentBody: "To be deleted",
                name: "J.R.R. Tolkien",
                email: "1954",
                movieId: "movie"
            }
          chai.request(app)
              .post('/api/comments')
              .send(comment)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');    
                done();
              });
        });

        it('it should POST a movie ', (done) => {
            let movie = {
                title: "Film to be deleted",
                genre: "blah",
                cast : "blah",
                runningTime : 100,
                director : "blah"
            }
          chai.request(app)
              .post('/api/movies')
              .send(movie)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');    
                done();
              });
        });

        it('it should POST a screening ', (done) => {
            let screening = {
                seats: ["mixed", 0],
                name: "blah",
                theaterId : "blah",
            }
          chai.request(app)
              .post('/api/screenings')
              .send(screening)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');    
                done();
              });
        });

        it('it should POST a booking ', (done) => {
            let booking = {
                seats: ["mixed", 0],
                name: "blah",
                filmTitle : "blah",
            }
          chai.request(app)
              .post('/api/bookings')
              .send(booking)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');    
                done();
              });
        });
    });
});

describe("api", () => {
    describe("PUT /", () => {
        it('it should UPDATE a screening given the id', (done) => {
            let screening = new Screening({ "seats.3.3" : 1,
            "seats.3.4" : 1
              })
            screening.save((err, screening) => {
                  chai.request(app)
                  .put('/api/screenings/5f5647c2e4518c4c244e72e7')
                  .send({ "seats.3.3" : 1,
                  "seats.3.4" : 1
                    })
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                    done();
                  });
            });
        });
    });

    describe("DELETE /", () => {
        it('it should POST a booking ', (done) => {
                        let booking = {
                            seats: ["mixed", 0],
                            name: "blah",
                            filmTitle : "blah",
                        }
                      chai.request(app)
                          .post('/api/bookings')
                          .send(booking)
                          .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');    
                            done();
                          });
                    });
      it('it should DELETE a comment given the id', (done) => {
            chai.request(app)
                  .delete('/api/comments/5f4f658366c0280a60d16190')
                  .end((err, res) => {
                        res.should.have.status(200);
                    done();
                  });

        });


        it('it should DELETE a movie given the id', (done) => {
            chai.request(app)
                  .delete('/api/movies/5f57ae9831960a586c6cc9c5')
                  .end((err, res) => {
                        res.should.have.status(200);
                    done();
                  });

        });
    });


});