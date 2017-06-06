import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'

export default class Contact extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<div id={props.id} className="contact">
				<div className="container">
					<div className="row">
						{props.items.map((item, index) => {
							return (
								<div key={index} className="col-sm-4">
									<ContactItem icon={item.icon} description={item.description}/>
								</div>
							)
						})}
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="social-icon">
								{props.socials.map((item, index) => {
									return (
										<a key={index} href={item.href}>
											<i className={item.iconClass} aria-hidden="true"></i>
										</a>
									)
								})}
							</div>
							<div className="copyright">
								{props.copyright}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}	

Contact.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  socials: PropTypes.array,
  copyright: PropTypes.string
}