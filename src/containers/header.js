import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Header extends Component {
  onClickAutentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };

  render() {
    const { isLoggedIn, setAuthentification } = this.props;

    const onClickAutentification = () => {
      setAuthentification(!isLoggedIn);
    };

    const renderAuthentificationLabel = () => {
      if (isLoggedIn) {
        return "Deconnexion";
      } else {
        return "Connexion";
      }
    };

    return (
      <div>
        <ul className="nav nav-tabs bg-light">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ressources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={onClickAutentification}>
              {renderAuthentificationLabel()}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentification.isLoggedIn,
  };
};
export default connect(mapStateToProps, actions)(Header);
