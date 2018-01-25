React AB testing: 'react-ab' module
A simple npm package to AB test components in React and record the results in a mongo database via express!

On the frontend, possible components are passed in as props to the ABTest component. Each variant has a 50% probability of appearing. In the example below, there is a 50% chance of id=“caps” button or id=“lowercase” button being rendered.

```
const {countAB, ABTest} = require('react-ab');

class BuyButton extends React.Component {

	handleClick(variant) {
		countAB("caps_or_lowercase", variant);
		...
	}

	render() {
		return(
			<ABTest
				id={“caps_or_lowercase”}
				a={
					<button onClick={this.handleClick("caps");}>BUY NOW</button>
				}>
				b={
					<button onClick={this.handleClick("lowercase")}>buy now</button>
				}
			</ABTest>
		)
	}
```

The function ```countAB(id, variant)``` sends a post request to the server:

```

function countAB(id, variant) {

	const req = new XMLHttpRequest();
	req.open('POST', '/abtest', true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.addEventListener('error', function(e) {
		console.log("Unable to save AB test: ",e);
	});
	req.send("id="+id+"&variant="+variant);

}
```

In express app, we handle post requests and save to the app's mongodb via some simple middleware to catch the post requests:

```
app.use(reactMongoAB(<MONGODBURL>));
```

We create an ABTest schema to store in mongodb:

```
// db.js
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// ABTest schema
const ABTestSchema = new mongoose.Schema({
	id: String,
	total_count: number,
	a: {
		variant: String
		count: number
	},
	b: {
		variant: String
		count: number
	}
});

mongoose.model(‘ABTest’, ABTestSchema);
```

So, in this example, the document might be:

```

{
	_id: 1250925u28361681age44,
	id: "caps_or_lowercase",
	total_count: 7899,
	a: {
		variant: "caps",
		count: 9
	},
	b: {
		variant: "lowercase",
		count: 7890
	}

}

```

because everyone hates caps
