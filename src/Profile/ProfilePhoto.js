import React from 'react'
import imh from './Pxer.jpg';

const ProfilePhoto = () => {
    return (
        <div className="pho">
    <h3>My Profile Photo</h3>
    <div className="pu">
 <img src={imh} width="500px" height="400px" />
        </div>
        </div>

    )
}

export default ProfilePhoto
