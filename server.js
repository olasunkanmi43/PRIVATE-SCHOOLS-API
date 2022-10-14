	
	const express = require('express'),
		  mongoose = require('mongoose'),
		  app = express();


		app.use(express.urlencoded({extended:false}));
		app.use(express.json());

		mongoose.connect("mongodb://localhost:27017/privateSchoolDB", {useNewUrlParser:true});

		app.use('/', require('./routes/schoolRoutes'));

		app.listen(2100, () => {
			console.log("Server started on port 2100")
		})