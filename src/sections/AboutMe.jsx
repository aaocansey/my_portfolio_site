import "../css/styles.css";
import profile from "../assets/profile pic.png";
function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="section-heading">About Me</div>
      <div className="profile">
        <div className="profile picture">
          <img src={profile} style={{ width: "30rem" }} />
        </div>
        <div className="profile-info">
            My name is <span className="profile-name">Albert Ahuma Ocansey</span><br/><br/>
          I am a Software Developer and Graphic Designer with <br />
          two years of experience in web and mobile app devel- <br />
          opment. I am skilled in building interactive web an- <br />
          d mobile applications using HTML, CSS, JavaScript, 
          <br />
          Dart, React JS, shopify, and Flutter.
          <br />
          <br />
          I am adept at database management, API integration, <br />
          and version control. I also have <span>six years</span> experience  <br />
          in graphic designing working with over <span>24 clients</span>. <br />
          You don't just your projected delivered but you<br/> also get an experience of a lifetime.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
