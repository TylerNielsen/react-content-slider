var React = require('react');
var Button = require('./Button.js');

//--------------------------------------------------
// Class: SliderJumpbuttons
//
//
//--------------------------------------------------

var Slider = React.createClass({

	//Set up component variables
	propTypes : {
		contentObj: React.PropTypes.object
	},
	
	getDefaultProps: function() {
		return {
			useArrows: true,
			useJump: true
		}
	},
	
	getInitialState: function() {
		totalItems = this.props.contentObj.data.length;
	
		return {
			currentItem: 0,
			totalItems: totalItems
		};
	},

	//State functions
	increment: function (e) {
		var next = this.state.currentItem + 1;
		if (next >= this.state.totalItems) return;
		this.setState({
			currentItem: next
		});
	},

	decrement: function (e) {
		var next = this.state.currentItem - 1;
		if (next < 0) return;
		this.setState({
			currentItem: next
		});
	},
	
	jumpTo: function(e) {
		var next = this.target.value;
		this.setState({
			currentItem: next
		});
	},
		
	render: function () {
		var directionalArrows = [
			<div key="1" className="slider-arrow slider-arrow-left" onClick={this.decrement}>&lt;</div>,
			<div key="2" className="slider-arrow slider-arrow-right" onClick={this.increment}>&gt;</div>
		];
		
		var jumpButtons = <SliderJumpButtons totalItems={this.state.totalItems} />;
		
		const SliderTemplate = React.Children.map(this.props.children,
			(child) => React.cloneElement(child, {
      			 content: this.props.contentObj.data[this.props.currentItem]
      		})
    	);
		
		return (
			<div className="slider-container">
				{this.props.useArrows ? directionalArrows : null}
				{SliderTemplate}
		    	{this.props.useJump ? jumpButtons : null}
		    </div>
		);
	}
});

//--------------------------------------------------
// Class: SliderJumpbuttons
//
//
//--------------------------------------------------


var SliderJumpButtons = React.createClass({
	propTypes: {
		totalItems: React.PropTypes.number.isRequired
	},
	
	generateButtons: function () {
		var max = this.props.totalItems;
		var buttons = [];
		for (var i = 1; i <= max; i++) {
			buttons.push(<div key={i} className='jump-to-button'>{i}</div>);
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

module.exports = Slider;