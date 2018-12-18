import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {
  
  state = {
  	restante: '',
  	presupuesto: '',
  	gastos: {}
  }

  componentDidMount(){
  	this.obtenerPresupuesto();
  }	


  obtenerPresupuesto = () => {
  	
  	let presupuesto = prompt('Cual es tu presupuesto?');
  	let resultado = validarPresupuesto(presupuesto);

  	if(resultado){
  		this.setState({
  			presupuesto : presupuesto,
  			restante    : presupuesto
  		})
  	}
  	else{
  		this.obtenerPresupuesto();
  	}
  }


  agregarGasto = gasto => {
  	const gastos = {...this.state.gastos}

  	gastos[`gasto${Date.now()}`] = gasto;

  	this.restarPresupuesto(gasto.cantidadGasto);

  	this.setState({
  		gastos: gastos
  	})
  	
  }

  restarPresupuesto = (cantidad) => {
  	let restar    = Number(cantidad);
  	let restante  = this.state.restante;

  	restante -= restar;

  	restante = String(restante);

  	this.setState({
  		restante: restante
  	})
  }




  render() {
    return (
      	<div className = 'App container'>
      
	      	<Header
	      		titulo = 'Gastos Semanales'
	      	 />

	      	<div className='contenido-principal contenido'>
	      		<div className='row'>
	      			
	      			<div className='one-half column'>
	      				<Formulario 
	      					agregarGasto = {this.agregarGasto}
	      				/>
	      			</div>
	      			
	      			<div className='one-half column'>
	      				
	      				<ControlPresupuesto 
	      					presupuesto = {this.state.presupuesto}
	      					restante = {this.state.restante}
	      				/>

	      				<Listado 
	      					gastos = {this.state.gastos}
	      				/>

	      			</div>
	      		</div>
	      	</div>

      	</div>
    )
  }
}

export default App;

