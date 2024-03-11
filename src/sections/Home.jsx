import Navbar from "../components/Navbar";
import '../css/styles.css'

function Home() {
    return (  
        < div className="home">
            
            <Navbar/>
            <div className="tagline-two">
            <span className="tagline-one">
                I'm a 
            </span>
                <div>
                    Software<br /> 
                    Developer,
                </div>
                 <span style={{color:'#e1684d'}}>GRAPHIC <br/> DESIGNER</span>
            </div>
            <div className="contact-btn">
                CONTACT ME
            </div>
           
        </div>
    );
}

export default Home;
