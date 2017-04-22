var models  = require('../models');
var express = require('express');
var router  = express.Router();
var models = require('../models');


router.get('/', function(req, res){
	models.Burgers.findAll()
	.then(function (availBurgs){
		var burgersToPage = {burger: availBurgs};

		return res.render('index', burgersToPage);
	})
});


router.post('/insertOne', function (req, res) {
	var newBurg = req.body.burger_name;
	models.Burgers.create({
		burger_name: newBurg,
		devoured: false
	})
	.then(function(){
		return res.redirect('/');
	})
});


router.put('/updateOne/:id', function(req, res){
	var burgerId = req.params.id; 
	var customer = req.body.customer; 
	models.Customers.create({name: customer})
			.then(function(customer){
				customer.update({BurgerId: burgerId})
			})
	models.Burgers.findOne({where: {id: burgerId}})
		.then(function(eatBurg){
			eatBurg.update({devoured: 1, customer: customer}) 
		})
		.then(function(){
			return res.redirect('/');
		})
});

module.exports = router;
