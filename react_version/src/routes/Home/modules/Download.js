import React from 'react'
import PropTypes from 'prop-types'

export default class Download extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div id={props.id} className="download">
				<div className="container">
					<div className="left">
						<h2>
							{props.caption}
							<span>{props.captionHelper}</span>
						</h2>
						<div className="action">
							{props.actions.map((item, index) =>
								<a key={index} href={item.href} className="btn">
									<i className={item.iconClass} aria-hidden="true"></i>
									{item.text}
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}	

Download.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  captionHelper: PropTypes.string,
  actions: PropTypes.array
}