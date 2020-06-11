import React, { Component } from "react";
import { connect } from "react-redux";

export default function (ChildComponent) {
  class RequireAuthentification extends Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }

    componentDidUpdate(nextProps) {
      if (nextProps.isLoggedIn !== this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.authentification.isLoggedIn,
    };
  };
  return connect(mapStateToProps, null)(RequireAuthentification);
}
