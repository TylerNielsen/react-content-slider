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
			var classes = "slider-index-button";

			//Add a separate class to the index button for the currently selected item.
			if (current == i) { classes += " current-item" };

			buttons.push(
				<div
					key={i}
					className={classes}
					onClick={this.props.handleClick.bind(null,i)}
				>
				{this.props.useNumericIndex ? i+1 : null}
				</div>);
		}
		return buttons;
	},

	render: function () {
		return (
			<div className="slider-index-container">
				{this.generateButtons()}
			</div>
		);
	}
});

module.exports = SliderIndexButtons;
