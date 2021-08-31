import {useState, useEffect} from 'react'


const useIncrement = (initialValue=0, step=1) => {

    const [count, setCount] = useState(initialValue);
    useEffect(() => {
        const increment = setInterval(() => {
          setCount(count => count + step);
        }, 1000);
        return () => clearInterval(increment);
      }, []);
    
      return (
        [count, setCount]
    )


}

export default useIncrement

/* const [count, setCount] = useState(initialValue)

const increment = () => {
    setCount (count => count + 1)
}


    return (
        [count, increment]
    )
*/


