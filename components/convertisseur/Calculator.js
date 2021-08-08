import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import ToFarenheit from './ToFarenheit';
import ToCelsius from './ToCelsius';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: 20
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this)
    }

    handleCelsiusChange (temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
        
    }

    handleFarenheitChange (temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
        
    }

    
    

    render() {
        const {temperature, scale} = this.state
        const celsius = scale === 'c' ? temperature : ToCelsius(temperature)
        const farenheit = scale === 'f' ? temperature : ToFarenheit(celsius)
        return (
            
                <div>
                    <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                    <TemperatureInput scale='f' temperature={farenheit} onTemperatureChange={this.handleFarenheitChange}/>
                    <BoilingVerdict celsius={celsius}/>
                </div>

                
        
        );
    }
}

export default Calculator;