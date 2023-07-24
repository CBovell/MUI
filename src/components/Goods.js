import { useState } from "react"
import { TextField, Slider, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"
import Footer from "./Footer"

function Goods(){

    return(
        <div className="goodswrapper">
            <div className="goods">

                <div className="inputForm">
                <form className="form" action={`https://formsubmit.co/${REACT_APP_EMAIL}`} method="POST">
                    <h3>{process.env.REACT_APP_FORMTITLE}</h3>
                    <input type='number' name='servings' min ='1' placeholder={process.env.REACT_APP_FORM1} className="textbox" required />
                    <br/>
                    <input type = 'text' name='contact' placeholder="Contact Information • Number or Email" className="textbox" required/>
                    <br/>
                    <select name='type' className="textbox" required>
                        <option selected disabled hidden>{process.env.REACT_APP_CAT5}</option>
                        <option>{process.env.REACT_APP_CAT1}</option>
                        <option>{process.env.REACT_APP_CAT2}</option>
                        <option>{process.env.REACT_APP_CAT3}</option>
                        <option>{process.env.REACT_APP_CAT4}</option>
                    </select>
                    <br/>

                <textarea placeholder="Tell Us About Any Requirements You May Have" name='Description'required/>
                <br/>
                <textarea placeholder="Please Link to Any Designs You Like " name='Inspiration'required/>
                <br/>
                <input type="submit" value="Submit" className="orderbut"></input>
                </form>
                </div>
            </div>
            <Footer/>
        </div>
            
        )
            
    }

    export default Goods