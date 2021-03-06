var mongoose = require('mongoose')
var Attribute = require('../modeles/attribute');


exports.savenew = function(req, res) {
	console.log(req.body)
	var id = req.body.id
	var attributeObj = req.body
	var _attribute
	if (id) {
		console.log(id)
	} else {
		_attribute = new Attribute(attributeObj)
		_attribute.values.push(attributeObj.value)
		console.log(_attribute)
		_attribute.save(function(err, attribute) {
			if (err) {
				console.log(err)
			}
			res.send(200)
		})
	}
}

exports.list = function(req, res) {
	Attribute.fetch(function(err, attribute) {
		res.send(attribute)
	})
}

exports.check = function(req, res) {
	var name = req.body.name
	Attribute
		.find({
			name: name
		})
		.exec(function(err, attribute) {
			if (attribute[0]) {
				res.send(202)
			} else {
				res.send(200)
			}
		})
}