import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    console.log('app')
    const addMessage = (title: string) => {
        let newMessage = {message: 'messageNew'};
        setMessage([newMessage,...message])
    }
    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
