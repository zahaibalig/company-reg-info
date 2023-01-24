import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [dataTable, setDataTable] = useState([]); 
  const getCompaniInfo = () => {
    Axios.get('https://data.brreg.no/enhetsregisteret/api/enheter/984851006')
    // .then((res) => res.json() )
    .then((response) => {
      setDataTable(response);
      console.log(response.data.navn);
      })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="App">
      <h1>Hello world </h1>
      <button onClick={getCompaniInfo}>Get company info</button>
      {/* <input type="text" >{dataTable.navn}</input> */}
      <h3>{dataTable.navn}</h3>
    </div>
  );
}

export default App;
