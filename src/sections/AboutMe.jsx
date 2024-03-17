import "../css/styles.css";
import profile from "../assets/profile pic.png";
function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="section-heading">About Me</div>
      <div className="profile">
        <div className="profile picture">
          <img src={profile} style={{ width: "15rem", background: 'white', marginBottom:'20px' }} />
        </div>
        <div className="profile-info">
          My name is <span className="profile-name">Albert A. Ocansey</span><br/><br/>
          I am a Software Developer and Graphic Designer with two years'
          experience in web and mobile app development. I am skilled in building 
          interactive web and mobile applications using HTML, CSS, JavaScript, Dart, React JS, shopify, and Flutter. I am adept at database 
          management, API integration, and version control. 
          <br />
          <br />
          I also have <span>six years</span> experience in graphic designing,
          and I have with over <span>24 clients</span>. My works include flyers
          brand designs, logos, brochures and web designs. 
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
