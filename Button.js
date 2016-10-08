var React = require('react');

var Button = React.createClass({
	propTypes: {
		contentObj: React.PropTypes.object
	},

	render: function () {
		var title = this.props.contentObj.data[this.props.currentItem].title;
		var body = this.props.contentObj.data[this.props.currentItem].body;

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
