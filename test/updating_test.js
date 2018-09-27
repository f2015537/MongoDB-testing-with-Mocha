const assert = require('assert');
const MarioChar = require('../models/mariochar');



// Describe tests
describe('Updating records', () => {

    var char;

    beforeEach((done) => {
     char = new MarioChar({
        name: 'Mario',
        weight: 50
    });

     char.save().then(() => {
        done();
    });
 });

    //Creeate tests
    it('Updates one record in the database', (done) => {
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.name === 'Luigi');
                done();
            });
        });
    });

    it('Increments the weight of every instance of MarioChar by 1kg', (done) => {
        MarioChar.update({}, { $inc : {weight: 1}}).then(() => {
            MarioChar.findOne({name: 'Mario'}).then((record) => {
                assert(record.weight === 51);
                done();
            });
        });
    });
});