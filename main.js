var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('./Slider.js');
var SimpleTemplate = require('./SimpleTemplate.js');

var JSON = {
	"data": [
		{
			"title": "First Title",
			"body": "Lorem Ipsum something or other content"
		},
		{
			"title": "Second Title",
			"body": "Four score and seven years ago"
		},
		{
			"title": "Third Title",
			"body": "Third times a charm."
		},
		{
			"title": "Fourth Title",
			"body": "Fourth times a charm."
		}
	]
}

ReactDOM.render(
	<Slider contentObj={JSON}>
			<SimpleTemplate />
	</Slider>,
		document.getElementById('app')
	);
