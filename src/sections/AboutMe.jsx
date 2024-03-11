import "../css/styles.css";
import profile from "../assets/profile pic.png";
function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="section-heading">About Me</div>
      <div className="profile">
        <div className="profile picture">
          <img src={profile} style={{ width: "30rem", background: 'white', marginBottom:'20px' }} />
        </div>
        <div className="profile-info">
            My name is <span className="profile-name">Albert Ahuma Ocansey</span><br/><br/>
          I am a Software Developer and Graphic Designer with <br />
          two years of experience in web and mobile app devel- <br />
          opment. I am skilled in building interactive web and <br />
          mobile applications using HTML, CSS, JavaScript, Dart, 
          <br />
          React JS, shopify, and Flutter. I am adept at database <br />
          management, API integration, 
          and version control. 
          <br />
          <br />
          I also have <span>six years</span> experience in graphic designing,<br />
          and I have with over <span>24 clients</span>. My works include fly- <br /> ers
          brand designs, logos, brochures and web designs. 
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
