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
            <div className="goods">
            <div className="inputForm">
            <div className="formtitles">
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={e =>{
                    setType(e.target.value)
                }}
                >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                <MenuItem value={'D'}>D</MenuItem>
                </Select>
        </FormControl>
        <br/>
        <br/>

            <h3>Joe</h3>
            </div>
            <Slider
            value={num}
            name="number"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={6}
            marks
            min={6}
            max={100}
            onChange={event => {
                setNum(event.target.value);
                console.log(num)
                }}
            />
            <div className="formtitles">
            <h3>Joe</h3>
            </div>
            <TextField
            fullWidth
            id="outlined-controlled"
            name="desc"
            value={name}
            onChange={event => {
            setName(event.target.value);
            console.log(description)
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
                name="links"
                value={name}
                onChange={event => {
                setName(event.target.value);
                console.log(name)
                }}
            />
            <br/>
            <br/>
            <Button 
            variant="text"
            onClick={handleSubmit}
            
            >Submit</Button>
            </div>
        </div>
        <Footer/>
        </div>
        
        
        
        
    )
        
    

}

export default Goods