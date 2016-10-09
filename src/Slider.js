var React = require('react');
var SimpleTemplate = require('./SimpleTemplate.js');
var SliderArrow = require('./SliderArrow.js');
var SliderIndexButtons = require('./SliderIndexButtons');

//--------------------------------------------------
// Class: Slider
// Description:
//
//--------------------------------------------------

var Slider = React.createClass({
	//Set up component variables
	propTypes : {
		contentObj: React.PropTypes.object.isRequired
	},

	getDefaultProps: function() {
		return {
			useArrows: true, 	//Will not use arrow control if false.
			useJump: true 		//Will not use index control if false.
		}
	},

	getInitialState: function() {
		return {
			currentItem: 0,
			totalItems: this.props.contentObj.data.length
		};
	},

	//State functions
	jumpTo(i){
		this.setState({
			currentItem: i
		})
	},

	increment: function (e) {
		var next = this.state.currentItem + 1;
		if (next >= this.state.totalItems) return;
		this.jumpTo(next);
	},

	decrement: function (e) {
		var next = this.state.currentItem - 1;
		if (next < 0) return;
		this.jumpTo(next);
	},

	indexButtonClick: function(index) {
		this.jumpTo(index);
	},


	render: function () {
		var directionalArrows = [
				<SliderArrow
					key="0"
					handleClick={this.decrement}
					currentItem={this.state.currentItem}
					totalItems={this.state.totalItems}
					value="&lt;"
					type="left"
				/>,
				<SliderArrow
					key="1"
					handleClick={this.increment}
					currentItem={this.state.currentItem}
					totalItems={this.state.totalItems}
					value="&gt;"
					type="right"
				/>
		];

		var indexButtons = <SliderIndexButtons
			 									totalItems={this.state.totalItems}
												handleClick={this.indexButtonClick}
												currentItem={this.state.currentItem}
											/>;

		/*The below variable will pass necessary props to whatever Component will be
		used to render the slider content (should be a child of this component) */
		const SliderTemplate = React.Children.map(this.props.children,
			(child) => React.cloneElement(child, {
      			 content: this.props.contentObj.data[this.state.currentItem],
						 currentItem: this.state.currentItem
      		})
    	);

		return (
			<div className="slider-container">
				{this.props.useArrows ? directionalArrows : null}
				{SliderTemplate}
		    {this.props.useJump ? indexButtons : null}
		  </div>
		);
	}
});

module.exports = Slider;
