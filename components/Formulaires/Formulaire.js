import React, { Component } from 'react';
import Champs from './Champs';
import Checkbox from './Checkbox';

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            prenom : '',
            newsletter : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    } 

    handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false
        })
    }

    
    
    render() {
        return (
            <form className="container" >
                <Champs name='nom' value={this.state.nom} onChange={this.handleChange}>nom</Champs>
                <Champs name='prenom' value={this.state.prenom} onChange={this.handleChange}>prenom</Champs>
                <Checkbox name='newsletter' checked={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
                <div>
                    <button onSubmit={this.handleSubmit}  >Envoyer</button>
                </div>
                {JSON.stringify(this.state)}
            </form>

            /* <div>
                    <label htmlFor='nom'>nom</label>
                    <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/>
                </div>
                <div>
                    <label htmlFor='prenom'>prenom</label>
                    <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/>
                </div>
                <div>
                    <label htmlFor='newsletter'>newsletter</label>
                    <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"/>
                    {JSON.stringify(this.state)}
                </div> */
        );
    }
}

export default Formulaire;

