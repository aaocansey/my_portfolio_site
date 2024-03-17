import flyer1 from "../assets/flyer-one.jpg";
import flyer2 from "../assets/flyer-two.jpg";
import flyer3 from "../assets/flyer-three.png";
import flyer4 from "../assets/flyer-four.jpg";
import flyer5 from "../assets/flyer-five.jpg";
import flyer6 from "../assets/flyer-six.png";
import flyer7 from "../assets/flyer-seven.png";
import flyer8 from "../assets/flyer-eight.jpg";
import flyer9 from "../assets/flyer-nine.png";
import flyer11 from "../assets/flyer-eleven.jpg";
import flyer12 from "../assets/flyer-twelve.jpg";
import flyer13 from "../assets/flyer-13.jpg";
import flyer14 from "../assets/flyer-14.jpg";



function Flyers(props) {
  return (
    <div className="flyer tiles">
      <div className="tile">
        <img
          src={flyer1}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer1");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer2}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer2");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer3}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer3");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer4}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer4");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer5}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer5");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer6}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer6");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer7}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer7");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer8}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer8");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer9}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer9");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer11}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer11");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer12}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer12");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer13}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer13");
          }}
        />
      </div>
      <div className="tile">
        <img
          src={flyer14}
          alt="picture"
          width={150}
          onClick={() => {
            props.setDisplayState("block");
            props.setSelectionName("flyer14");
          }}
        />
      </div>
      <div className="showFullPicture" style={{ display: props.displayState }}>
        <div
          className="close-btn"
          onClick={() => props.setDisplayState("none")}
        >
          Close
        </div>
        <img
          src={
            props.selectionName === "flyer1"
              ? flyer1
              : props.selectionName === "flyer2"
              ? flyer2
              : props.selectionName === "flyer3"
              ? flyer3
              : props.selectionName === "flyer4"
              ? flyer4
              : props.selectionName === "flyer5"
              ? flyer5
              : props.selectionName === "flyer6"
              ? flyer6
              : props.selectionName === "flyer7"
              ? flyer7
              : props.selectionName === "flyer8"
              ? flyer8
              : props.selectionName === "flyer9"
              ? flyer9
              : props.selectionName === "flyer11"
              ? flyer11
              : props.selectionName === "flyer12"
              ? flyer12
              : props.selectionName === "flyer13"
              ? flyer13
              : props.selectionName === "flyer14"
              ? flyer14
              : null
          }
          alt="picture"
          width={350}
        />
      </div>
    </div>
  );
}

export default Flyers;
