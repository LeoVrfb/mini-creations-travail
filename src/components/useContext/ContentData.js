import React, {useContext} from 'react'
import {UserContext, ColorContext} from './MyContext'

function ContentData() {
      const user = useContext(UserContext)
      const color = useContext(ColorContext)

      return (
        <div style={{color: color}}>
        <ul>
            <li>Nom: {user.name}</li>
            <li>age: {user.age}</li>
        </ul>
    </div>
      )
}

/* La version longue :

return (

       <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ColorContext.Consumer>
                            {
                                salut => {
                                    return (
                                        <div style={{color: salut}}>
                                    <ul>
                                        <li>Nom: {user.name}</li>
                                        <li>age: {user.age}</li>
                                    </ul>
                                </div>
                                    )
                                }
                            }
                            
                            </ColorContext.Consumer> 
                                
                        ) 
                    }
                }

        </UserContext.Consumer> 
        
    ) */

export default ContentData
