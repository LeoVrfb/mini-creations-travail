import React, { Component } from 'react';

class Checkbox extends Component {
    render() {

        const {name, value, onChange, children} = this.props

        return (
            <div className="form-check">
                <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input"/>               
                <label htmlFor={name} className="form-check'label">{children}</label>
                
                
            </div>
        );
    }
}

export default Checkbox;