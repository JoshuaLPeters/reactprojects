import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props){
    return(
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your age: {props.age}</p>
        </div>
    );
}

let root = (
    <div>
        <Person name="Kyle" age="40"/>
        <Person name="Josh" age="32"/>
        <Person name="Nick" age="30"/>
        <Person name="Jonah" age="16"/>
        <Person name="Caleb" age="18"/>
        <Person name="Kristin" age="49"/>
        <Person name="Kirk" age="50"/>
    </div>
);


ReactDOM.render(root,
    document.querySelector('#root'));






// ReactDOM.render(<Person name="Josh" age="32"/>,
//     document.querySelector('#p1'));
//
//
// ReactDOM.render(<Person name="Nick" age="30"/>,
//     document.querySelector('#p2'));