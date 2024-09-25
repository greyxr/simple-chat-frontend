import React, { useState } from 'react';
import { printToOutput } from '../../components/chat';

const SqlChat = () => {
    const [currentInput, setInput] = useState('')
    const handleInputKeyPress = (event) => {
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          console.log(currentInput)
          // Trigger the button element with a click
        //   handleInput()
        printToOutput(currentInput)
        setInput('')
        
        }
      }

      let loading = false


    return (
        <main>
        <div id="output"></div>
        <input type="input" id="input" className="form-control bg-dark text-white" placeholder="go north..." onChange={(e) => setInput(e.target.value)} onKeyDown={handleInputKeyPress} style={{
            display: 'block',
          }}
        />
        <div id="loading" className="loader" style={{
            display: loading ? 'flex' : 'none',
          }}>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
        </div>
        </main>
    )
}

export default SqlChat