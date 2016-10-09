var React = require('react');
var ReactCSSTransitionReplace = require('react-css-transition-replace');

var SimpleTemplate = React.createClass({
	propTypes: {  //Since these props are introduced via createElement, making them required produces an error.
		content: React.PropTypes.object,
		currentItem: React.PropTypes.number
	},

	render: function () {
		var title = this.props.content.title;
		var body = this.props.content.body;

		return (
			<ReactCSSTransitionReplace
				transitionName="fade-wait"
        transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}>
				<div key={this.props.currentItem}>
					<span className="slider-counter">{title}</span>
					<br />
					<span>{body}</span>
				</div>
			</ReactCSSTransitionReplace>
		);
	}
});

module.exports = SimpleTemplate;
