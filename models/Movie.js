var mongoose = require('mongoose');

//movie schema.
var MoveiSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});



// Export the movie model schema
module.export = MovieSchema;