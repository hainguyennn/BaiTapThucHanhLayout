import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Produclist extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
          <div className="col-4">
            <ProductItem></ProductItem>
          </div>
        </div>
      </div>
    );
  }
}
