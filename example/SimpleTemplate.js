var React = require('react');

var SimpleTemplate = React.createClass({
	propTypes: {  //Since these props are introduced via createElement, making them required produces an error.
		content: React.PropTypes.object,
	},

	render: function () {
		var title = this.props.content.title;
		var body = this.props.content.body;

		return (
			<div>
				<span className="mySlider-title">{title}</span>
				<br />
				<span>{body}</span>
			</div>
		);
	}
});

module.exports = SimpleTemplate;
