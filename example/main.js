var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('../src/Slider.js');
var MySliderTemplate = require('./MySliderTemplate.js');

var content = [
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
			"body": "Fourth times a charm as well."
		}
]


ReactDOM.render(
	<Slider content={content}>
			<MySliderTemplate />
	</Slider>,
		document.getElementById('app')
	);
