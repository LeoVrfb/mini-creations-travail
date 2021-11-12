import React, {useState, useEffect} from 'react'

function Timertwo() {


    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
   

    return (
      <div>
      {seconds}
        
      </div>
    );
}

export default Timertwo
