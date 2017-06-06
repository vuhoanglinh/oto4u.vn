import React from 'react'
import PropTypes from 'prop-types'

export default class ContactItem extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div className="item">
				<div className="icon">
					<img src={props.icon} />
				</div>
				<div className="description" dangerouslySetInnerHTML={{__html: props.description}}></div>
			</div>
		)
	}
}	

ContactItem.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string
}