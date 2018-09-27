const assert = require('assert');
const MarioChar = require('../models/mariochar');



// Describe tests
describe('Deleting records', () => {

    var char;

    beforeEach((done) => {
       char = new MarioChar({
        name: 'Mario',
    });

       char.save().then(() => {
        done();
    });
   });

    //Creeate tests
    it('Deletes one record from the database', (done) => {
        MarioChar.findOneAndDelete({name: 'Mario'}).then(() => {
            MarioChar.findOne({name: 'Mario'}).then((result) => {
                assert(result === null);
                done();
            });
        });
    });
});