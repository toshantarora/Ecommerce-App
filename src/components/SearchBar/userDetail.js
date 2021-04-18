import React from 'react'
// import './userdetail.css';

const UserDetail = (props) => {

    const {name, username, email} =  props;
    return (
        
            <div className="card">
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        
    )
}

export default UserDetail;