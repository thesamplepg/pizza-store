import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, clicked }) => {
    return <FontAwesomeIcon 
        icon={icon} 
        onClick={clicked ? clicked : null}
    />
}

export default Icon;