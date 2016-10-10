var React = require('react');
var SliderArrow = require('./SliderArrow.js');
var SliderIndexButtons = require('./SliderIndexButtons');
//--------------------------------------------------
// ReactClass: Slider
//
// Description: This component creates a content slider by accepting an array of objects and expecting
// 							a child component that will display a single object of your content object array. <Slider>
//							will handle generating controls to iterate through the content.
//
// Props:
//    content - (input/object/required) - content should be an array of objects, with each object
//																				contaiing the same data stucture.
//		useArrows - (config/bool/default=true) -  set to false if you don't want to include
//																					  	arrows on your slider to move through content.
//		useTextArrows - (config/bool/default=true) - set to false if you plan to plan to inclue an image for
//																								 the arrow class.
//		useIndex - (config/bool/default=true) - set to false if you don't want to include an index
//																						control to jump to specific content.
//		useIndexNumbers - (config/bool/default=true) - 	Set to fase if you plan on configuring a generic style
//   																					 				in .slider-index-button.
//--------------------------------------------------

var Slider = React.createClass({
	propTypes : {
		content: React.PropTypes.array.isRequired,
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
			totalItems: this.props.content.length
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
      			 content: this.props.content[this.state.currentItem],
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
