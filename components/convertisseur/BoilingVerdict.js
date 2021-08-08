import React from 'react'

function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
    return <div className="alert alert-sucess">L'eau bout</div>
    
}
 return <div className='alert-alert-info'>L'eau ne bout pas </div>
}

export default BoilingVerdict
