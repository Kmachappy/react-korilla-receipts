import './App.css';
import {useState} from 'react'
import receiptsArr from './ReceiptData';
import Receipts from './component/Receipts';
import Search from './component/Form'

function App() {
  const [receipts,setReceipt] = useState(receiptsArr)
  console.log("app: " ,receipts)
  // we do this function here because we are modifying state with the search from the from value 
  const getReceipts = (searchTerm)=>{
    console.log("serch term: ", searchTerm)
    let client;
    if( searchTerm == ""){
      setReceipt(receiptsArr)
    }else{
      client = receiptsArr.filter(receipt=> (receipt.person.toLowerCase() == searchTerm.toLowerCase()))
      setReceipt(client)
    }

  }
  

  

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Search getReceipts={getReceipts}/>
      <Receipts receipts={receipts} setReceipt={setReceipt}/>
    </div>
  );
}

export default App;
