import React from "react";

function UserCard(props) {
    return (

        <div className="card userCardClass m-3" >
            <div className="row">
                

                <div className="col">
                    <div className="card-body">
                        <h5 className="card-text">{props.username}</h5>
                        <p className="card-text">{props.address}</p>
                        <p className="card-text">{props.state}</p>
                        <p className="card-text">{props.birthday}</p>
                        <p className="card-text">{props.email}</p>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default UserCard;