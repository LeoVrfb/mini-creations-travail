import React, { Component } from 'react';


class ClassState extends Component {

constructor(props) {
    super(props)

    this.state = {
         counter: 0,
         
    }
    // this.handleChange = this.handleChange.bind(this)
}

addOne = () => {
        this.setState(prevState => {
            return { 
                counter: prevState.counter + 1

            }
            
        })
}

/*  Autres écritures possibles :

1.
addOne = () => {
        this.setState({
                counter: this.state.counter + 1
            }) 
}


2.
addOne = () => {
        this.setState(state => ({
            counter: state.counter + 1
                }))
}
 
addOne = () => {
        this.setState((state, props) => ({
            counter: state.counter + 1
                }))
}
*/




    render () {
            return( 
                <div>
                    <p>
                        ClassState: {this.state.counter}
                    </p>
                    <button onClick={this.addOne}>State dans class </button>                    
                </div>
            )
    }
}

export default ClassState

/* useState partie 1 */
