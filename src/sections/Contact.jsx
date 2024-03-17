import "../css/styles.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-heading">Contact Me</div>
     <div>
        <p className="c-header">Phone</p>
        <p className="contact-input">+233242239275</p>
     </div>
     <div>
        <p className="c-header">Email</p>
        <p className="contact-input">albertocansey582@yahoo.com</p>
     </div>
     <div>
        <p className="c-header">Linkedin</p>
        <p className="contact-input"><a href="https://www.linkedin.com/in/albert-ocansey-a44b811a4/recent-activity/all/">click to view</a></p>
     </div>
    </div>
  );
}

export default Contact;
