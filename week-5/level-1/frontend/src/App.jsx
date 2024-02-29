import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard } from './components/BusinessCard';
import { CardForm } from './components/CardForm';
import axios from 'axios';

function App() {
  const [businessCards, setBusinessCards] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setBusinessCards(response.data.users);
        console.log(response.data.users);
      })
      .catch(e => {
        console.log("Error fetching cards", e);
      });
  }, []);

  return (
    <div>
      <CardForm />
      {businessCards.map((item) => (
        <BusinessCard key={item.id} name={item.name} bio={item.bio} social={item.social} interests={item.interests} />
      ))}
    </div>
  )
}

export default App
