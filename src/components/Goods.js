import { useState } from "react"
import { TextField } from "@mui/material"
import Footer from "./Footer"

function Goods(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [num, setNum] = useState('')
    const[imglinks, setImage] = useState('')
    const [description, setDescription] =useState('')

    const onClick = (()=>{
        console.log(name)
    })


    return(
        <div className="goodswrapper">
            <div className="goods">
            <div className="inputForm">
            <div className="formtitles">
            <h3>Joe</h3>
            </div>
            <TextField
            fullWidth
            id="outlined-controlled"
            value={name}
            onChange={event => {
            setName(event.target.value);
            console.log(name)
            }}
            />
            <br/>
            <br/>
            <div className="formtitles">
            <h3>Joe</h3>
            </div>
            <TextField
                fullWidth
                id="outlined-controlled"
               
                value={name}
                onChange={event => {
                setName(event.target.value);
                console.log(name)
                }}
            />
            </div>
        </div>
        <Footer/>
        </div>
        
        
        
        
    )
        
    

}

export default Goods