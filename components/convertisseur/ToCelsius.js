import React from 'react'

function ToCelsius(farenheit) {
    
    return (farenheit - 32) * 5 / 9
}

export default ToCelsius

/*
T(°F) = T(°C) × 9/5 + 32

or

T(°C) = (T(°F) - 32) × 5/9


*/ 
