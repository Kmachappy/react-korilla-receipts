import './App.css';
import {useState} from 'react'
import receiptsArr from './ReceiptData';
import Receipts from './component/Receipts';
import Search from './component/Form'

function App() {
  const [receipts,setReceipt] = useState(receiptsArr)

  console.log(receipts) 
  

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Search/>
      <Receipts receipts={receipts}/>
    </div>
  );
}

export default App;
