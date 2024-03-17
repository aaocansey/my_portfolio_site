import { useState } from "react";
import Navbar from "../components/Navbar";
import '../css/styles.css'
function Home() {
    const [displayMenu, setDisplayMenu] = useState('none');
    return (  
        < div className="home">
            <Navbar displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
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
