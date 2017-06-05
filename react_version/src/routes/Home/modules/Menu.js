import React from 'react'
import PropTypes from 'prop-types'

export default class Menu extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const props = this.props;
		return (
			<nav className="navbar">
			  <div className="container">
			    <div className="navbar-header">
			        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
			        </button>

				    <a className="navbar-brand" href="#">
				    	<img alt="OTO4U.VN" src={props.logo} />
				    </a>
			    </div>

			    <div className="collapse navbar-collapse" id="menu">
			    	<ul className="nav navbar-nav navbar-right">
			    		{props.items.map((item, index) => {
			    			return <li key={index}><a href={item.href} onClick={() => props.onItemClick(item.href)} className="item">{item.text}</a></li>
			    		})}
			    	</ul>
			    </div>

			  </div>
			</nav>
		)
	}
}

Menu.propTypes = {
  logo: PropTypes.string,
  alt: PropTypes.string,
  items: PropTypes.array,
  onItemClick: PropTypes.func
}