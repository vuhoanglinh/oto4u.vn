import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

export default class Review extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div id={props.id} className="review">
				<Slider infinite={true} dots={true} arrows={true}>
					{props.reviews.map((item, index) => {
						return (
							<div key={index}>
								<div className="container">
									
								</div>
							</div>
						)
					})}
				</Slider>
			</div>
		)
	}
}	

Download.propTypes = {
  id: PropTypes.string,
  reviews: PropTypes.array
}