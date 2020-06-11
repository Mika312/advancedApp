import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <Link className="nav-link" to={"/"}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/ressources"}>
              Ressources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={"#"}
              onClick={onClickAutentification}
            >
              {renderAuthentificationLabel()}
            </Link>
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
