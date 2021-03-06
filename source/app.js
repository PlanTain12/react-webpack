import React from 'react';
import  './styles.scss';


const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

const App = () => {
    return (
        <div className="content">
            <div className="label">
                Create React App Without CRAπ
            </div>
            <button className="btn" onClick={onClickEvent}>Click Me π</button>
        </div>
    )
}

export default App;