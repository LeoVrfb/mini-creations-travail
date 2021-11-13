import React, { Component } from 'react'

export default class ClientsListe extends Component {


        clientInput = React.createRef();

        state = {
            clients: [
                {id: 1, nom: "Lior Chamla"},
                {id: 2, nom: "Magali Perrin"},
                {id: 3, nom: "Joseph Durand"}
            ],
            nouveauClient: ''
        }

       /* 
        handleClick = () => {
            const clients = this.state.clients.slice();
           clients.push({id: 4, nom: "Anne Dupont"});

            this.setState({clients: clients})
        } */

        handleDelete = (id) => {
            const clients = this.state.clients.slice();
            const index = clients.findIndex((client) =>
            {
                return client.id === id
            })

            clients.splice(index, 1);
            this.setState({
                clients: clients
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();

            const id = new Date().getTime();
            const nom = this.state.nouveauClient;

            const client = {id, nom}; /* qui signifie : const client = {id : id, nom : nom} */
            const clients = this.state.clients.slice(); /* equivalent de : const clients = [...this.state.clients] */
            clients.push(client)

            this.setState({clients: clients, nouveauClient: ''}); /* qui peut aussi s'écrire : this.setState({ clients, nouveauClient: ''}) */
            // const valeur = this.clientInput.current.value;
        }

        handleChange = (e) => {
                this.setState({
                    nouveauClient : e.target.value
                })
        }


    render() {

       
        return (
            <div className="conatainer text-center">
                <h1>Liste de Clients</h1>
                <button /* onClick={this.handleClick} */>ajouter "Anne Dupont"</button>
                <ul>
                    {this.state.clients.map(client => (
                         <li>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button>
                         </li>
            ))}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <input /* ref={this.clientInput} */ value={this.state.nouveauClient} 
                     type="text"  placeholder="Ajouter un client"
                     onChange={this.handleChange} />
                    <button>Confirmer</button>
                </form>
            </div>
        )


    }
}
