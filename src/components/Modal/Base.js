import React from 'react'
import FonctionModale from './FonctionModale'
import Modal from './Modal'

function Base() {

    const {mPasVisible, renduVisible} = FonctionModale();

    return (
        <div>
            <button onClick={renduVisible}>Cliquez moi</button>
            <Modal cache={renduVisible} visible={mPasVisible}/>
            
        </div>
    )
}

export default Base
