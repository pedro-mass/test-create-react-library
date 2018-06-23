import React, { Component } from "react";

import ExampleComponent from "@pedro-mass/test-create-react-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Update 2:</p>
        <ExampleComponent text="Modern React component module" />
      </div>
    );
  }
}
