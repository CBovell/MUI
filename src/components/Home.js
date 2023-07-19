import Footer from "./Footer"
import {storage} from '../firebase'
import {ref, getDownloadURL} from 'firebase/storage'
import { useEffect, useState } from "react"
function Home(){

    const [homeimg, setIMG] = useState('')
    const [loading, setLoading] = useState(false)

    const getImage = async () =>{
        const imgRef = ref(storage, 'others/homeimg.jpg')
        try {
            const url = await getDownloadURL(imgRef)
            setIMG(url)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getImage()
        setLoading(true)
        
    },[])


    if(loading){
        return(
            <div>
                <div className="wrapper">
                
                <header>
                    <img src={homeimg} className="background"/>
                    <h1 className="title">{process.env.REACT_APP_COMPANY_NAME}</h1>
                </header>
                <section>
                    <div className="roundedabout">
                    <h1 className="about">About the Company</h1>
                    <h5 className="abtext">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturThis is a description of the company</h5>
                    </div>
                    
    
                </section>
            
                
    
                <Footer/>
            </div>
            </div>
        )

    }

}

export default Home