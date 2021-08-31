import React, { Component } from 'react'
import Profile from './components/useContext/Profile';
import {UserContext, ColorContext} from './components/useContext/MyContext'


class AppTwo extends Component {

    state = {
        user: {
            name: "Lisa",
            age: 8
        }
    }

    render() {
        return (

            <UserContext.Provider value={this.state.user}>
                 <ColorContext.Provider value={'red'}>   
                     
                     <Profile/>

                 </ColorContext.Provider> 
            </UserContext.Provider>
          
            
        )
    }
}

export default AppTwo;

/* "useContext" video 8 de Donkey Geek, lié au dossier useContext */