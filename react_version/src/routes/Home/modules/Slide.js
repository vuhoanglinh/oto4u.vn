import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

export default class Slide extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		const actions = props.actions || [];
		return (
			<div id={props.id} className="slider">
				<Slider infinite={true} dots={true} arrows={true}>
					{props.children}
				</Slider>
			</div>
		)
	}
}	

Slide.propTypes = {
  id: PropTypes.string
}