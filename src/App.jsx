import React, { useState } from 'react';
import './App.css';
import image from './assets/download.png';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <img src={image} alt="image" />
      <h1>Notes App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your note"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;