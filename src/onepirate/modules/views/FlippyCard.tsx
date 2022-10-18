import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import Rick from "./images/rick.png";
import reactImg from "./images/react4.jpg";
import "../../../App.css";

const FlippyStyle = {
  width: "200px",
  height: "300px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center",
};

class FlippyCard extends React.Component {
  flippyHorizontal: { toggle: () => void } = { toggle: () => {} };
  constructor(props: any) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  render() {
    return (
      <div className='FlippyCard'>
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Flippy
            ref={(r: { toggle: () => void }) => (this.flippyHorizontal = r)}
            flipOnClick={false}
            style={FlippyStyle}
          ></Flippy>
          <Flippy
            flipOnClick={true}
            flipDirection='horizontal'
            style={FlippyStyle}
          >
            <React.Fragment>
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundImage: `url(${reactImg})`,
                }}
              >
                <img
                  src={reactImg}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                RICK
                <span
                  style={{
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  I flip 'horizontal'ly on click
                  <br />
                  (FRONT SIDE)
                </span>
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: "#175852",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                ROCKS
                <span
                  style={{
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  I flip 'horizontal'ly on click
                  <br />
                  (BACK SIDE)
                </span>
              </BackSide>
            </React.Fragment>
          </Flippy>
        </div>
      </div>
    );
  }
}

export default FlippyCard;