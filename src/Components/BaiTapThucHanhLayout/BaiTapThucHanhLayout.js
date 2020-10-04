import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-9">
              <Content></Content>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
