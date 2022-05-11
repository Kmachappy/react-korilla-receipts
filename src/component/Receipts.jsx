const Receipts = ({receipts,setReceipt})=>{
    
    // console.log("paid: " , receipts[1].paid)
    const handleToggle = (index) =>{
        let receiptsCopy = [...receipts]
        // console.log("all array:", receiptsCopy)
        console.log("one arr: " , receiptsCopy[index])
        receiptsCopy[index].paid = !receiptsCopy[index].paid
        console.log("after click: " , receiptsCopy[index])
        console.log("arr after click", receiptsCopy)
        setReceipt(receiptsCopy)
        
    }


    return(
        <div className="receipts-area">
            {receipts.map((client, index) =>{
            return(
            <div className="receipt-card" key={index}>
                <h1>{client.person}</h1>
                <h3>{client.order.main}</h3>
                <hr class="hl"></hr>
                <div className="order">
                <p>Protein: {client.order.protein}</p>
                <p>Rice: {client.order.rice}</p>
                <p>Sauce: {client.order.sauce}</p>
                <p>Drink: {client.order.drink}</p>
                <p>Cost: {client.order.cost}</p>
                    <p style={{color: client.paid ? "green" : "red"}} 
                     onClick={()=>handleToggle(index)}>
                        Paid: {client.paid ? "True": "False"  } 
                    </p>
                    {/* <button>Paid</button> */}
                </div>
            </div>
            )
            })
        }



        </div>
    )
}

export default Receipts