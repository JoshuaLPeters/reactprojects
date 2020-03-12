import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(){
    return(
        <div className="person">
            <h1>Josh</h1>
            <p>Your age: 32</p>
        </div>
    );
}

ReactDOM.render(<Person />,
    document.querySelector('#p1'));