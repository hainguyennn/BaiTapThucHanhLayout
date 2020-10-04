import React, { Component } from "react";
import Carousel from "./Carousel";
import Produclist from "./Produclist";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Carousel></Carousel>
        <Produclist></Produclist>
      </div>
    );
  }
}
