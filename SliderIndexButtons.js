var React = require('react');
//--------------------------------------------------
// Class: SliderIndexButtons
// Description:
//
//--------------------------------------------------

var SliderIndexButtons = React.createClass({
	propTypes: {
		totalItems: React.PropTypes.number.isRequired,
		currentItem: React.PropTypes.number.isRequired,
		handleClick: React.PropTypes.func.isRequired
	},

	generateButtons: function () {
		var totalItems = this.props.totalItems;
		var current = this.props.currentItem;
		var buttons = [];

		for (var i = 0; i < totalItems; i++) {
			var classes = "slider-jump-button";

			//Add a separate class to the jump button for the currently selected item.
			if (current == i) { classes += " current-item" };

			buttons.push(
				<div
					key={i}
					className={classes}
					onClick={this.props.handleClick.bind(null,i)
				}>
				{i+1}
				</div>);
		}
		return buttons;
	},

	render: function () {
		return (
			<div className="slider-jumpTo-container">
				{this.generateButtons()}
			</div>
		);
	}
});

module.exports = SliderIndexButtons;
