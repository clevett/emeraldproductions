import React from "react";

import { Col } from "react-bootstrap";
import data from "./data/terrain_data.js";
import "./Terrain.scss";
import Switch from "../../../Switch/Switch";
import findObjectByName from "../helpers/findObjectByName/findObjectByName";
import { calculateMultiplier } from "../helpers/calculateMultiplier/calculateMultiplier";

class Terrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      multiplier: 0,
      active: [],
      types: data.map((object) => object.name),
    };
  }

  determineMultiplier = async (name, status) => {
    const object = await findObjectByName(this.state.data, name);
    const updatedMultiplier = await calculateMultiplier(
      this.state.multiplier,
      object.multiplier,
      status
    );
    return updatedMultiplier;
  };

  determineActiveTerrain = (name, status) => {
    const currentTerrain = this.state.active;
    return status === true
      ? [...currentTerrain, name]
      : currentTerrain.filter((entry) => entry !== name);
  };

  handleToggle = async (name, status) => {
    const updatedMultiplier = await this.determineMultiplier(name, status);
    const updatedActiveTerrain = this.determineActiveTerrain(name, status);

    await this.setState({
      multiplier: updatedMultiplier,
      active: updatedActiveTerrain,
    });

    this.props.onValueChange("terrain", this.state.multiplier);
    this.props.onValueChange("activeTerrain", this.state.active);
  };

  renderedList = (terrains) =>
    terrains.map((terrain) => (
      <Switch
        key={terrain.name}
        name={terrain.name}
        handleToggle={this.handleToggle}
      />
    ));
  terrainSwitches = (terrainTypes) => (
    <div className="switches">{this.renderedList(terrainTypes)}</div>
  );

  render() {
    return (
      <Col className="Terrain">
        <h3>Terrain</h3>
        {this.terrainSwitches(this.state.data)}
      </Col>
    );
  }
}

export default Terrain;
