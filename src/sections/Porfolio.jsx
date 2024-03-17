import { useState } from "react";
import Flyers from "../components/Flyers";
import Webapps from "../components/WebApps";

import webapp1 from "../assets/webapp-images/web_img_1.jpeg";
import flyer1 from "../assets/flyer-one.jpg";
import logo1 from "../assets/logos/logo_1.png";
import Logos from "../components/Logos";

function Portfolio() {
  const [toggleState, setToggleState] = useState(1);
  const tabIndex = (index) => {
    setToggleState(index);
  };

 const [displayState, setDisplayState] = useState('none') 
 const [selectionName, setSelectionName] = useState('') 

  return (
    <div className="portfolio">
      <div className="section-heading">Portfolio</div>
      <div className="portfolio-tabs">
        <a onClick={() => tabIndex(1)}>All</a>
        <a onClick={() => tabIndex(2)}>Webapps</a>
        <a>Mobile Apps</a>
        <a onClick={() => tabIndex(3)}>Logos</a>
        <a onClick={() => tabIndex(4)}>Flyers</a>
      </div>
      <div className={toggleState == 1 ? "active-tab all" : "tab"}>
        <div className="tile">
          <img src={webapp1} alt="picture" width={150} onClick={()=>{setDisplayState('block'); setSelectionName('webapp1')}} />
        </div>
        <div className="tile">
          <img src={flyer1} alt="picture" width={150} onClick={()=>{setDisplayState('block'); setSelectionName('flyer1')}}/>
        </div>
        <div className="tile">
          <img src={logo1} alt="picture" width={150} onClick={()=>{setDisplayState('block'); setSelectionName('logo1')}}/>
        </div>
      </div>
      <div className={toggleState == 2 ? "active-tab" : "tab"}>
        <Webapps displayState={displayState} setDisplayState={setDisplayState} selectionName={selectionName} setSelectionName={setSelectionName}/>
      </div>
      <div className={toggleState == 3 ? "active-tab" : "tab"}>
        <Logos/>
      </div>
      <div className={toggleState == 4 ? "active-tab" : "tab"}>
        <Flyers displayState={displayState} setDisplayState={setDisplayState} selectionName={selectionName} setSelectionName={setSelectionName}/>
      </div>
      <div className="showFullPicture" style={{display:displayState}}>
      <div className="close-btn" onClick={()=>setDisplayState('none')}>Close</div>
      <img src={selectionName==='webapp1'?webapp1:selectionName==='flyer1'?flyer1:selectionName==='logo1'?logo1:null} alt="picture" width={350}/>  
      </div>
    </div>
  );
}

export default Portfolio;
