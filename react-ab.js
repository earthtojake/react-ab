const express = require('express');

// mongodb
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const React = require('react');

function createRouter(mongodburl) {

	// init schema
	const ABTestSchema = new mongoose.Schema({
		id: String,
		total_count: Number,
		results: { type : Array , "default" : [] }
	});
	mongoose.model("ABTest", ABTestSchema);
	mongoose.connect(mongodburl);

	// middleware for post params
	const router = express.Router();
	const bodyParser = require('body-parser');
	router.use(bodyParser.urlencoded({ extended: false }));

	// log post request
	router.post('/abtest/count', function(req, res) {

		const ABTest = mongoose.model("ABTest", ABTestSchema);

		const id = req.body.id;
		const variant = req.body.variant;

	    ABTest.findOne({'id':id},function(err, abtest) {

	    	const initVariant = {
            	"variant": variant,
            	"count": 1
            };

	        if (!abtest) {
	        	// create entry
		    	const newTest = new Graph({
		            id: id,
		            total_count: 1,
		            results: [initVariant]
		        });
		        newTest.save(() => {
		        	res.send();
		        })
	        } else {
	        	// update entry
	        	let hit = false;
	        	abtest.results.forEach(function(obj,i) {
	        		if (obj.variant === variant) {
	        			hit = true;
	        			// increment existing variant count
	        			abtest.results[i].count++;
	        		}
	        	});
	        	if (!hit) {
	        		// add new variant
	        		abtest.results.push(initVariant);
	        	}
	        	abtest.total_count++;
	        	abtest.save(() => {
	        		res.send();
	        	})
	        }

	    });

	});

	return router;

}

// frontend function which sends post request
const countAB = function(id, variant) {

	const req = new XMLHttpRequest();
	req.open('POST', '/abtest/count', true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.addEventListener('error', function(e) {
		console.log("Unable to save AB test: ",e);
	});
	req.send("id="+id+"&variant="+variant);

}

class ABTest extends React.Component{
	render() {
		const {id, a, b} = this.props;
		return Math.random() >= 0.5 ? a : b;
	}
}

module.exports = {
	'countAB': countAB,
	'reactAB': createRouter,
	'ABTest': ABTest,
}

