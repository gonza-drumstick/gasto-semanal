import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper'
import propTypes from 'prop-types';

class Restante extends Component{
	render(){

		const presupuesto = this.props.presupuesto
		const restante    = this.props.restante

		return(
			<div className={revisarPresupuesto(presupuesto, restante)}>
				restante $ {this.props.restante}
			</div>
		)
	}
}

Restante.propTypes = {
	restante: propTypes.string.isRequired,
	presupuesto: propTypes.string.isRequired
}

export default Restante;