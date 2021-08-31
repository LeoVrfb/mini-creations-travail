import React from 'react'
import Compteur from './Compteur'
import useToggle from './useToggle'

function AffichageCompteur() {

    const [compteurVisible, toggleCompteur] = useToggle(true)
    return (
        <div>
            afficher le compteur
            
             <input type="checkbox" onChange={toggleCompteur} checked={compteurVisible}/>
             {compteurVisible && <Compteur/>}
        </div>
    )
}

export default AffichageCompteur
