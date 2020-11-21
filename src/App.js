import React from 'react';
import 'App.sass';


import Troll from './components/Troll';


const App = () => (
    <>
        <div className="section">
            <h1>Hello, world!</h1>
            <h4>This is a react app</h4>
        </div>
        <Troll />
    </>
);


export default App;