import './App.css';
import React, {useState} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Babe']);

  const sendMessage =(event) => {
    event.preventDefault();
    setMessages([...messages, input])
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
      <FormControl>
        <InputLabel>Send Message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>
      {
        messages.map(message => (
          <p>{message}</p>
        ))
        }
    </div>
  );
}

export default App;
