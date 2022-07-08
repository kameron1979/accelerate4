import React, { Component } from "react";
import Pte from "../pages/Pte";
import Ppe from "../pages/Ppe";
import Prd from "../pages/Prd";

import ReactCardCarousel from "react-card-carousel";

export class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100%",
      width: "100%"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "500px",
      width: "500px",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
      textAlign: "center",
      background: "#e5e3e3",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div>
        <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>
            <Pte />
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <Ppe />
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <Prd />
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
