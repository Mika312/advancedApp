import React, { Component } from "react";
import { connect } from "react-redux";
import { addRessource } from "../actions";
import {
  getIntegerList,
  getContainsOneList,
  getPrimeIntegerList,
  getPrimeIntContainsOne,
} from "../selectors";

class Ressources extends Component {
  renderRessource = (ressources) => {
    return ressources.map((ressource) => <li key={ressource}>{ressource}</li>);
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            className="btn btn-raised btn-primary"
            type="button"
            onClick={() => this.props.addRessource()}
          >
            Ajouter
          </button>
        </div>
        <div className="col">
          Entiers <ul>{this.renderRessource(this.props.intergerRessources)}</ul>
        </div>
        <div className="col">
          Contiennent "1"
          <ul>{this.renderRessource(this.props.containsOneRessource)}</ul>
        </div>
        <div className="col">
          Entiers premiers
          <ul>{this.renderRessource(this.props.primeIntegerRessource)}</ul>
        </div>
        <div className="col">
          Entiers premiers contenant "1"
          <ul>
            {this.renderRessource(this.props.primeIntContainsOneRessource)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    intergerRessources: getIntegerList(state),
    containsOneRessource: getContainsOneList(state),
    primeIntegerRessource: getPrimeIntegerList(state),
    primeIntContainsOneRessource: getPrimeIntContainsOne(state),
  };
};

const mapDispatchToProps = {
  addRessource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);
