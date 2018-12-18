import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component{
	render(){
		return(
			<div className="alert alert-primary">
				presupuesto $ {this.props.presupuesto}
			</div>
		)
	}
}

Presupuesto.propTypes = {
	presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;