var React = require('react');

var SliderArrow = React.createClass({
	PropTypes: {
		currentItem: React.PropTypes.number.isRequired,
		totalItems: React.PropTypes.number.isRequired,
		value: React.PropTypes.string,
		handleClick: React.PropTypes.func.isRequired,
		type: React.PropTypes.string.isRequired
	},

	inactiveStyle: {
		color : "blue"
	},

	render: function() {
		var classes = "slider-arrow"
		var style = ""
		if ( this.props.type == "left" ) {
			classes += " slider-arrow-left"
			if(this.props.currentItem == 0) classes += " slider-arrow-inactive";
		} else {
			classes += " slider-arrow-right"
			if(this.props.currentItem == this.props.totalItems - 1) {
				style = this.inactiveStyle;
				classes += " slider-arrow-inactive";
			}
		}

		return (
			<div style={{style}} className={classes} onClick={this.props.handleClick}>
				{this.props.value}
			</div>
		);
	}

});

module.exports = SliderArrow;
