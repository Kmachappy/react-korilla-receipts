import { useState } from "react"

const Search = ({getReceipts}) =>{
    // const [formState, setFormState] = useState({ searchTerm:"" })
    const [formState, setFormState] = useState("")
    // console.log("formstate: ", formState)
    
    const handleChange = (event)=>{
        // setFormState({[event.target.name]: event.target.value  })
        setFormState(event.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        // uses the new updated versino of form state as you type 
        getReceipts(formState)
    }


    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="searchTerm" onChange={handleChange} value={formState.searchTerm} placeholder="search by name"/> */}
                <input type="text" name="formState" onChange={handleChange} value={formState} placeholder="search by name"/>
                <input type="submit" value="search" />
            </form>
        </div>
    )

}

export default Search