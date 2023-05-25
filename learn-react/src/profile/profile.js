import React from 'react'
import PropTypes from 'prop-types';

function Profile({fullName,bio,profession,children,handleName}) {
    return (
<div style={{color:'orangered'}}>

<h1>{fullName}</h1>
<p>{bio}</p>
<h1>{profession}</h1>
<div>{children}</div>
<button onClick={()=> handleName(fullName)}>click me!</button>

</div>

    )

}
Profile.defaultProps = {
    fullName : "rayen dhifaoui", bio:15002, profession:"front-end developper"
}
Profile.propTypes = {
    fullName : PropTypes.string.isRequired , 
    bio : PropTypes.string.isRequired , 
    profession : PropTypes.string.isRequired , 
    handleName : PropTypes.func.isRequired , 
    children : PropTypes.element.isRequired , 
    }
    export default Profile