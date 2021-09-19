import React, {useState} from 'react'

function FonctionModale() {
        const [mPasVisible, setmPasVisible] = useState(false);

        function renduVisible() {
            setmPasVisible(mPasVisible => !mPasVisible)
        }

        return (
            {mPasVisible, renduVisible}
        )
}
export default FonctionModale