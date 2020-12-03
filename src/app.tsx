import React, { Component } from "react";
import { Provider } from "react-redux";  //新增
import store from "./store/index";  // 新增
import "./utils/verifyUrl";
import "./app.scss";

class App extends Component {
  componentDidMount() { }

  render() {
    return <Provider store={store}> {this.props.children} </Provider>
  }
}

export default App;