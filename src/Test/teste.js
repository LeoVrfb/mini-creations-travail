import React, { Component } from 'react'

export default class Teste extends Component {

    state = {
        compteur : 0,
        changeur: null
    }

    componentDidMount() {
           this.myInterval = setInterval(() => {
                this.setState(state => ({compteur : state.compteur +1 }))
            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    // lecture() {
       
    // }

    pause() {
        window.clearInterval(this.state.compteur) 
        this.setState({
            compteur : null
        })
    
    }

    render() {
        return (
            <div>
                {this.state.compteur}
                {this.state.compteur && <button onClick={this.pause.bind(this)}>pause</button>}

            </div>
        )
    }
}
