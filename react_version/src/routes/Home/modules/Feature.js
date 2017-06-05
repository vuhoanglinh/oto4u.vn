import React from 'react'
import PropTypes from 'prop-types'

export default class Feature extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div id={props.id} className="feature">
				<div className="container">
					<h2 className="text-center">
						{props.caption}
						<span>{props.captionHelper}</span>
						<span className="divider"></span>
					</h2>

					{props.children}

				</div>
			</div>
		)
	}
}	

Feature.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  captionHelper: PropTypes.string,
}