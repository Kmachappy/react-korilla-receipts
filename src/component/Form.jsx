import { useState } from "react"

const Search = () =>{
    // const [formState, setFormState] = useState({
    //     searchTerm:""
    // })

    const [formState, setFormState] = useState("")
    console.log("searchterm: ", formState)

    const handleChange = (event)=>{
        // setFormState({
        //     [event.target.name]: event.target.value  
        // })
        setFormState(event.target.value)
    }

    return(
        <div className="form">
            <form>
                {/* <input type="text" name="searchTerm" onChange={handleChange} value={formState.searchTerm} placeholder="search by name"/> */}
                <input type="text" name="formState" onChange={handleChange} value={formState} placeholder="search by name"/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}

export default Search