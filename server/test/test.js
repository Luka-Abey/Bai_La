// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = 'http://localhost:5000';
const { describe, it } = require('mocha');
const should = require('chai').should();

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("api", () => {
    describe("GET /", () => {
        it("should get all posts record", (done) => {
             chai.request(app)
                 .get('/api/posts')
                 .end((err, res) => {
                     done();
                  });
         });

         it("should get all comments record", (done) => {
            chai.request(app)
                .get('/api/comments')
                .end((err, res) => {
                    done();
                 });
        });

        it("should get all users record", (done) => {
            chai.request(app)
                .get('/api/users')
                .end((err, res) => {
                    done();
                 });
        });
    });
});

describe("api", () => {
    describe("POST /", () => {
        it('it should POST a comment ', (done) => {
            let comment = {
                _id: "testID",
                commentBody: "To be deleted",
                post: "testPost"
            }
          chai.request(app)
              .post('/api/comments')
              .send(comment)
              .end((err, res) => {
                    // res.should.have.status(200);
                    should.exist(res);
                    // res.body.should.be.a('object');    
                done();
              });
        });




        it('it should POST a post ', (done) => {
            let post = {
                _id: "testID",
                postBody: "to be deleted"
            }
          chai.request(app)
              .post('/api/post')
              .send(post)
              .end((err, res) => {
                    // res.should.have.status(200);
                    // res.body.should.be.a('object');    
                done();
              });
        });
    });
});


// describe("api", () => {
//     describe("PUT /", () => {
//         it('it should UPDATE a screening given the id', (done) => {
//             let screening = new Screening({ "seats.3.3" : 1,
//             "seats.3.4" : 1
//               })
//             screening.save((err, screening) => {
//                   chai.request(app)
//                   .put('/api/screenings/5f5647c2e4518c4c244e72e7')
//                   .send({ "seats.3.3" : 1,
//                   "seats.3.4" : 1
//                     })
//                   .end((err, res) => {
//                         res.should.have.status(200);
//                         res.body.should.be.a('object');
//                     done();
//                   });
//             });
//         });
//     });

describe("DELETE /", () => {

  it('it should DELETE a comment given the id', (done) => {
        chai.request(app)
              .delete('/api/comments/testID')
              .end((err, res) => {
                    // res.should.have.status(200);
                done();
              });

    });


    it('it should DELETE a post given the id', (done) => {
        chai.request(app)
              .delete('/api/posts/testID')
              .end((err, res) => {
                    // res.should.have.status(200);
                done();
              });

    });
});
