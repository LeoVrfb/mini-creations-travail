import React, { Component } from 'react'

export default class AjoutTodo extends Component {

    state = {nom : ''}


  

    
    handleClick = (e) => {
            e.preventDefault()
            this.props.ajouter(this.state.nom)
            this.setState({
                nom : ''
            })
     
    }

    render() {


        return (
            <form onSubmit={this.handleClick}>
                <label htmlFor="nom">Mon nom</label>
                    <input type="text" id="nom" name="nom" value={this.state.nom} onChange={(e) => this.setState({nom: e.target.value})}/>
                    <button type="submit" >Ajouter</button>
            </form>
        )
    }
}
