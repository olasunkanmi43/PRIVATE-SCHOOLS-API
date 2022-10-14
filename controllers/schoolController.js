	
	const school = require('../model/school');
const School = require('../model/school');


	const listSchools = (req, res) => {
		School.find((err, result) => {
			if (err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});
	}

	const registerSchools = (req, res) => {
		const {name, address, city, state, contactPhone, website, annualFees} = req.body;

		if (!name || !address || !city || !state || !contactPhone || !website || !annualFees) {
			res.json({"msg": "Some data are missing"});
		} else{
			const school = new School({
			name, address, city, state, contactPhone, website, annualFees
		});

		school.save((err) => {
			if (err) {
				res.send(err);
			} else {
				res.json({"msg":"Data Successfully Captured"})
			}
		})

		
		}
	}

	const citySchools = (req, res) => {
		School.find({city:req.params.city}, (err, result) => {
			if(err) {
				res.send(err)
			} else {
				res.send(result)
			}
		})
	}

	const stateSchools = (req, res) => {
		School.find({state:req.params.state}, (err, result) => {
			if(err) {
				res.send(err)
			} else {
				res.send(result)
			}
		})
	}

	const deleteSchools = (req, res) => {
		School.deleteOne(
			{school: req.params.school},
			function(err){
				if (!err){
					res.send("Successfully deleted the corresponding school.");
				} else {
					res.send(err);
				}
			}
		);
	};
	

	
	module.exports = {
		listSchools,
		registerSchools,
		citySchools,
		stateSchools
	}