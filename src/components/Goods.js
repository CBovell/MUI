import { useState } from "react"
import { TextField, Slider, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"
import Footer from "./Footer"

function Goods(){

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [type, setType] = useState('A')
    const [num, setNum] = useState(12)
    const[imglinks, setImage] = useState('')
    const [description, setDescription] =useState('')

    const onClick = (()=>{
        console.log(name)
    })

    function valuetext(value) {
        return {value};
      }
    
    function handleSubmit(){
        console.log('ch')
    }



    return(
        <div className="goodswrapper">
            <div>
                <form>
                    <input type='number' name='number' min ='0' placeholder='Number of Servings' required />
                    <br/>
                    <input type = 'text' name='contact' placeholder="Contact Information" required/>
                    <br/>
                    <select name='type' required>
                        <option>{process.env.REACT_APP_CAT1}</option>
                        <option>{process.env.REACT_APP_CAT2}</option>
                        <option>{process.env.REACT_APP_CAT3}</option>
                        <option>{process.env.REACT_APP_CAT4}</option>
                    </select>
                    <br/>

                <textarea placeholder="Tell Us About Any Requirements You May Have" name='Description'required/>
                <br/>
                <textarea placeholder="Please Link to Any Designs You Like " name='Description'required/>


                </form>


            </div>


            <Footer/>
        </div>
            
            
            
            
        )
            
        

    }

    export default Goods