import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [text,setText] = useState([])

  const fetchData=async()=>{
    await axios.get('http://localhost/api/getall')
    .then(res=>{
        setText(res.data)
    }).catch(err=>{
        alert(err)
    })
}

  useEffect(()=>{
    fetchData()
    
  },[])
  console.log()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text.map((data,index)=>
          <h1 key={index}>{data.msg}</h1>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
