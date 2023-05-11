import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts/random?amount=10')
      .then(response => response.json())
      .then(data => {
        setCatFacts(data.map(fact => fact.text));
      })
      .catch(error => {
        console.error('Error fetching cat facts:', error);
      });
  }, []);

  return (
    <div className="cat-facts-container">
      <h1>10 Cat Facts</h1>
      <ul className="cat-facts-list">
        {catFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
