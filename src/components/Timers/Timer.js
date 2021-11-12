import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {compteur: 10, timer: null}
        
    }

    componentDidMount () {
            this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)
    }

    incremente () {
        this.setState(() => {

            return{ compteur: this.state.compteur + 1}

        })
    }

    pause () {
        window.clearInterval(this.state.timer) 
            this.setState({
                timer: null
            })
        
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
                timer : window.setInterval(this.incremente.bind(this), 1000)
            }
        )
        
    }


    render() {

        
        return (
            <div>
                
                {this.state.compteur}

                {this.state.timer ? 
                <button onClick={this.pause.bind(this)}>Pause</button> 
                :
                <button onClick={this.play.bind(this)}>Play</button>}
                
            </div>
        );
    }
}

export default Timer;






//exercice indépendant