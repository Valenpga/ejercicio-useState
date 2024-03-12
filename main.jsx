import React, {useState} from 'react';

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');
  
    const handleNameChange = (newName) => {
      setName(newName);
    };
  
    return (
      <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
          <li onClick={() => handleNameChange("Data")}>Data</li>
          <li onClick={() => handleNameChange("Reyes")}>Reyes</li>
          <li onClick={() => handleNameChange("Yolanda")}>Yolanda</li>
        </ul>
      </div>
    );
}
