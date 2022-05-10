const Receipts = ({receipts})=>{
    
    // console.log(receipts)

    return(
        <div className="receipts-area">
            {receipts.map(client =>{
            return(
            <div className="receipt-card">
                <h1>{client.person}</h1>
                <h3>{client.order.main}</h3>
                <hr class="hl"></hr>
                <div className="order">
                <p>Protein: {client.order.protein}</p>
                <p>Rice: {client.order.rice}</p>
                <p>Sauce: {client.order.sauce}</p>
                <p>Drink: {client.order.drink}</p>
                <p>Cost: {client.order.cost}</p>
                <p>Paid: {client.order.paid ? "true": "false"} </p>
                </div>
            </div>
            )
            })
        }



        </div>
    )
}

export default Receipts