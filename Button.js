var React = require('react');

var Button = React.createClass({
	propTypes: {
		content: React.PropTypes.object
	},

	render: function () {
		var title = this.props.content.title;
		var body = this.props.content.body;

		return (
			<div>
				<span className="slider-counter">{title}</span>
				<br />
				<span>{body}</span>
			</div>
		)
	}
});

module.exports = Button;
