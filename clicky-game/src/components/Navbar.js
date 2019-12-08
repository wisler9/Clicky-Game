import React from "react";

function Navbar(props){
    return (
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="navbar-nav mx-auto">
                    <h3>Clicky Game</h3>
                    <h3>{props.clickMessage}</h3>
                    <h3>Score: {props.correctGuesses} | Top Score: {props.topScore}</h3> 
                </div>
            </nav>
            <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </div>
        </div>    
    )
}



export default Navbar;