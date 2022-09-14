import './App.css';
import {useState} from "react"
function App() {
  const [age,setAge] = useState(0)
  const [heartratelimit, setHeartratelimit] = useState(0)
  
  function calculate() {
    const upperHrl=(220-age)* 0.85;
    const lowerHrl=(220-age)* 0.65;
    setHeartratelimit(lowerHrl + "-" + upperHrl)
    
  }
  return (
    <form div id='content'>
      <div>
      <h3>Heart Rate Limits</h3>
      </div>
      <div>
      <label>Age</label> &nbsp;
      <input type="number" value={age} onChange={x=> setAge(x.target.value)}></input>
      </div>
      <br></br>
      <div>
      <label>Heart Rate Limits</label> &nbsp;
      <button>{heartratelimit}</button>
      </div>
      <br></br>
      <div>
      <button type="button" class="btn btn-primary"onClick={calculate}>Calculate</button>
      </div>
    </form>
  );
}

export default App;
