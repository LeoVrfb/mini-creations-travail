import React, { Component } from 'react'
import AjoutTodo from './ajoutTodo'
import {v4 as uuid} from 'uuid'




class TodoClass extends Component {

       state = {

          tableau : [
           
            {id: 1, name : 'Matthias'},
            {id: 2, name : 'Arthur'},
            {id: 3, name : 'Djoko'}
            
        ],
            valeur: false
       }

       
    
    render() {

        const ajoutNom = (nouveauNom) => {
            if(nouveauNom !== ''){
                    this.state.valeur && this.setState({
                        valeur : false
                    });
                    this.setState({
                        tableau: [...this.state.tableau, {
                            id: uuid(),
                            name: nouveauNom
                        }]
                    })
            } 
            else {
                this.setState({
                    valeur: true
                })
            }
       }
        const messageErreur = this.state.valeur && <div role='alert'>Veuillez indiquer un Nom</div>

        const mappage = this.state.tableau.map(objet => {
            return (
                <li key={objet.id}>{objet.name}</li>
            )
    })

console.log(this.state.valeur)
        return (
            
            <div>
               {messageErreur}
                <div>{mappage}</div>
                <AjoutTodo ajouter={ajoutNom}/>
                
                    
            </div>
        )
    }
    
}

export default TodoClass
