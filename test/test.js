const expect = require('chai').expect; // Require chai's functionality. 
const request = require('request'); // Require request from express.


describe('Testing a response from the iTunes API', function(){ //Grouping single test isnt necessary. This is good practice when wanting to add more tests at a later stage.
    //Changed the timeout of this test, as the default value of 2000ms is not enough time (as we are requesting information from an external API)
    //The test needs to get a result from the API to succeed, we do not have control over the turnaround time of this API request 
    this.timeout(10000);
    it('Status Code', function(done){ 
        request('http://localhost:8080/search/?term=Tool&media=music', function(error, response, body){ //Endpoint matches get in server.js
          expect(response.statusCode).to.equal(200); //The chai test. 
          done(); //Test is done.
        });
    });

    it('Response with content', function(done){ 
        request('http://localhost:8080/search/?term=Tool&media=music', function(error, response, body){ //Endpoint matches get in server.js
          expect(response).not.to.be.null; //The chai test. 
          done(); //Test is done.
        });
    });
})

//This test checks whether the status is okay/successful(200).