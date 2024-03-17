import Logo from "../assets/company_logo.png";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={Logo} width={"100px"} />
      </div>
      <div onClick={() => props.setDisplayMenu("flex")} style={{ display: "flex", alignItems:'center' }}>
        <div
          className="hidden-menu"
          style={{marginRight:'10px'}}
          
        >
          h-menu
        </div>
      </div>
      <div className="navLinks" style={{ display: props.displayMenu }}>
        <p style={{color:'#e1684d', alignSelf:'flex-end'}} onClick={()=>props.setDisplayMenu("none")}>close X</p>
        <a>HOME</a>
        <a>ABOUT ME</a>
        <a>SKILLS</a>
        <a>PORTFOLIO</a>
        <a>SERVICES</a>
        <a>CONTACT</a>
      </div>
      <a className="nav-btn">LET'S TALK NOW</a>
    </div>
  );
}

export default Navbar;
