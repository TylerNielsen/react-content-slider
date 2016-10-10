var React = require('react');
var SliderArrow = require('./SliderArrow.js');
var SliderIndexButtons = require('./SliderIndexButtons');

//--------------------------------------------------
// Class: Slider
// Description:
//
//--------------------------------------------------

var Slider = React.createClass({
	propTypes : {
		contentObj: React.PropTypes.object.isRequired,
		useArrows: React.PropTypes.bool,
		useTextArrows: React.PropTypes.bool,
		useIndex: React.PropTypes.bool,
		useIndexNumbers: React.PropTypes.bool
	},

	getDefaultProps: function() {
		return {
			useArrows: true, 	//Will not use arrow control if false.
			useTextArrows: true, //Unless false, will use "<" and ">" for arrows. useArrows must also be true.
			useIndex: true, 		//Will not use index control if false.
			useNumericIndex: true  //Unless false, will use numeric index buttons (1,2,3,4). useIndex must also be true.
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
		var prev = this.state.currentItem - 1;
		if (prev < 0) return;
		this.jumpTo(prev);
	},

	indexButtonClick: function(index) {
		this.jumpTo(index);
	},

	render: function () {
		if (this.props.useArrows) {
			var directionalArrows = [
				<SliderArrow
					key="0"
					handleClick={this.decrement}
					currentItem={this.state.currentItem}
					totalItems={this.state.totalItems}
					value={this.props.useTextArrows ? "<" : null}
					type="left"
				/>,
				<SliderArrow
					key="1"
					handleClick={this.increment}
					currentItem={this.state.currentItem}
					totalItems={this.state.totalItems}
					value={this.props.useTextArrows ? ">" : null}
					type="right"
				/>
			];
		};

		if(this.props.useIndex) {
			var indexButtons =
				<SliderIndexButtons
				 	totalItems={this.state.totalItems}
					handleClick={this.indexButtonClick}
					currentItem={this.state.currentItem}
					useNumericIndex={this.props.useNumericIndex}
				/>;
		};

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
				{directionalArrows ? directionalArrows : null}
				{SliderTemplate}
		    {indexButtons ? indexButtons : null}
		  </div>
		);
	}
});

module.exports = Slider;
