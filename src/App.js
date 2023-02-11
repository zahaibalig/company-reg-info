import React , {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [dataTable, setDataTable] = useState({}); 
  const [RegNumber, setRegNumber] = useState("");  //    984851006

  const getCompanyInfo = () => {
    Axios.get(`https://data.brreg.no/enhetsregisteret/api/enheter/${RegNumber}`)
    // .then((response) => response.json() )
    .then((response) => {
      setDataTable(response.data);
      console.log(response.data);
      })
    .catch((error) => {
      console.log(error);
    });
  }
  const handleChange = (RegNo) => {
    setRegNumber(RegNo.target.value);
  }
  return (
   
    <div className="App">
      <h1>Enter Company's Registration Number </h1>
      <input type="text" value={RegNumber} onChange= {handleChange}></input>
      <button onClick= {() => getCompanyInfo(RegNumber)}
      >Submit</button>
    <div className='inputDiv'>
      <table >
        <tr>
          <th>Navn</th>
          <td>{dataTable.navn}</td></tr>
        <tr>
          <th>Hjemmeside</th>
          <td>{dataTable.hjemmeside}</td>
        </tr>
        <tr>
          <th>Registreringsdato</th>
          <td>{dataTable.registreringsdatoEnhetsregisteret}</td></tr>
        <tr>
          <th>Organisasjonsnummer</th>
          <td>{dataTable.organisasjonsnummer}</td>
        </tr>
      </table>
    </div>
  </div>
  );
}

export default App;
