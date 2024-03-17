import webapp1 from "../assets/webapp-images/web_img_1.jpeg";



function Webapps(props) {
  return (
    <div className="webapp tiles">
      <div className="tile">
        <img
          src={webapp1}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("webapp1");
          }}
        />
      </div>
      <div className="showFullPicture" style={{ display: props.displayState }}>
        <div className="close-btn" onClick={() => props.setDisplayState("none")}>
          Close
        </div>
        <img
          src={props.selectionName === "webapp1" ? webapp1 : null}
          alt="picture"
          width={350}
        />
      </div>
      <div className="tile">
        {/* <img src={flyer2} alt="picture" width={150} /> */}
      </div>
    </div>
  );
}

export default Webapps;
