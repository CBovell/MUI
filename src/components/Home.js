import Footer from "./Footer"
function Home(){

    return(
        <div>
            <div className="wrapper">
            
            <header>
                <img src="https://www.hdwallpapers.in/download/dessert_cake_raspberries_sweet_fruit_blueberry_black_currant_4k_hd-HD.jpg" className="background"/>
                <h1 className="title">{process.env.REACT_APP_COMPANY_NAME}</h1>
            </header>
            <section>
                <h1 className="about">About the Company</h1>
                <h5 className="abtext">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturThis is a description of the company</h5>

            </section>
        
            

            <Footer/>
        </div>
        
        
        

        </div>
        
    )
        
    

}

export default Home