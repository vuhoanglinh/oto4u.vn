import React from 'react'
import PropTypes from 'prop-types'

export default class TopBanner extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		const actions = props.actions || [];
		return (
			<div id={props.id} className="top-banner">
				<div className="container">
					<div className="left">
						<img src={props.image} />
					</div>
					<div className="right">
						<h2>
							{props.caption}
						</h2>
						<p>{props.text}</p>
						<div className="action">
							{actions.map((action, index) => 
								<a key={index} href={action.href} className={action.class || ''}>
									<img src={action.image} />
								</a>
							)}
						</div>
					</div>
				</div >
			</div>
		)
	}
}	

TopBanner.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.array
}