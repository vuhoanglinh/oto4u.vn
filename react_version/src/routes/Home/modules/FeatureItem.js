import React from 'react'
import PropTypes from 'prop-types'

export default class FeatureItem extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div className="col-md-4 col-sm-6 item">
				<div className="container">
					<div className="icon">
						<img src={props.image} />
					</div>
					<div className="title">
						{props.title}
					</div>
					<div className="description">
						{props.description}
					</div>
				</div>
			</div>
		)
	}
}	

FeatureItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}