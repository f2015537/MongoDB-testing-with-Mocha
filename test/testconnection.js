const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the database before tests run
before((done) => {
	//Connect to mongodb
	mongoose.connect('mongodb://localhost/testaroo',
		{useNewUrlParser: true});

	mongoose.connection.once('open', () => {
		console.log('Connection has been made!.. you are ready to rock!');
		done();
	}).on('error', (err) => {
		console.log(`Connection error: ${err}`);
	});
});

// Drop the characters collection before each test
beforeEach((done) => {
	//Drop the collection
	mongoose.connection.collections.mariochars.drop();
	done();
});