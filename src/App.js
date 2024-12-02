import { useEffect, useState } from 'react';
import './App.css';
import Footnote from './components/footnote/Footnote';
import Grid from './components/grid/Grid';
import Result from './components/result/Result';

function App() {

  const [operation, setOperation] = useState("")
  const [output, setOutput] = useState("")

  useEffect(()=>{
    try {
      const sanitizedOperation = operation.replace(/x/g, '*').replace(/,/g, '.');
      const result = eval(sanitizedOperation);

      setOutput(result.toString().replace('.',','));
    } catch {
      
    }

    if (operation.length === 0){
      setOutput('0')
    }
  },[operation])

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className='Calculator'>
        <Grid operation={operation} setOperation = {setOperation}/>
        <Result operation={operation} output={output}/>
      </div>
      <Footnote/>
    </div>
  );
}

export default App;
