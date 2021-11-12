import React, {useRef} from 'react'
import './curseur.css'

function Curseur() {


    let curseurRef = useRef();

const mousePos = e => {
    curseurRef.current.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`)
}

    return (
        <div onMouseMove={mousePos} className='curs'>
            <div ref={curseurRef} className='curseurPerso'></div>
            <h1>Lorem ipsum etc</h1>

        </div>
    )
}

export default Curseur
