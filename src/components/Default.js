import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center text-danger pt-5">
          {this.props.location.pathname} does not exist.
        </h3>
      </div>
    );
  }
}
