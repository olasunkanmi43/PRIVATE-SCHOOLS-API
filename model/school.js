
	const mongoose = require('mongoose');

	const schooolSchema = mongoose.Schema({
		name: {
			type:String,
			required:true
		},
		address:{
			type:String,
			required:true
		},
		city:{
			type:String,
			required:true
		},
		state:{
			type:String,
			required:true
		},
		contactPhone:{
			type:Number,
			required:true
		},
		website:{
			type:String,
			required:true
		},
		annualFees:{
			type:String,
			required:true
		}	
	})

	module.exports = new mongoose.model("School", schooolSchema)