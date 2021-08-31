import { useState } from "react";
const useToggle = (initialValue = true) => {
   const [value, setValue] = useState(initialValue);
   const toggle = () => {
       setValue(v => !v)
   }

   return (

[value, toggle]
   )
}
export default useToggle