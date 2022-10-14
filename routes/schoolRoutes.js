	
	const express = require('express'),
		  router = express.Router();

	const {listSchools, registerSchools, stateSchools, citySchools} = require('../controllers/schoolController');

	router.get('/schools', listSchools);
	router.post('/schools', registerSchools);
	router.get('/schools/city/:city', stateSchools);
	router.get('/schools/state/:state', citySchools);


	module.exports = router;