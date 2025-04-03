const mongoose = require('mongoose');

const connectMongoDatabase = async () => {
	mongoose.set('strictQuery', true);

	const connected = await mongoose.connect(
		'mongodb+srv://test:test@team-up.qzylt.mongodb.net/'
	);

	console.log((`Mongo Connected: ${connected.connection.host}`));
};

module.exports = connectMongoDatabase;