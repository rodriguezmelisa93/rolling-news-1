import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
const {id, name , color , size , onClick} = props;
let icon;
switch(name) {
    case 'facebook':
        icon = 'faFacebook';
        break;
    case 'instagram':
        icon = 'fab fa-instagram';
        break;
    case 'twitter':
        icon = 'faTwitter';
        break;
}
const iconClass = `fab-fa${color} fab-fa${size}`;
 
return(
    <FontAwesomeIcon icon={icon} />
);
};
export default Icon;