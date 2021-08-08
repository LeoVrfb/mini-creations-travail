import React, { Component } from 'react';

class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this)
    }
     
    handleChange (e) {
        this.props.onTemperatureChange(e.target.value)
    }
    

    render() {
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleNames = {c: 'celsius', f: 'farenheit'}
        const scaleName = scaleNames[this.props.scale]
        return (
            <div>
               <label htmlFor={name}>Température en {scaleName}</label>
               <input type="text" id={name} value={temperature} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TemperatureInput;