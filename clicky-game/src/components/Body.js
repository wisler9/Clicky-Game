import React from "react";

const styles = {
    width: 250,
    height: 250
}

function Body(props){
    return (
    
    <div className="card col-3" style={styles} onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
            <img src={props.image} alt="" style={styles} />
        </div>
    </div>
    );
}

export default Body;