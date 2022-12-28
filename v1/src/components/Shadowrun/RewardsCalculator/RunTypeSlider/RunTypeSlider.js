import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import convertRunType from "../helpers/convertRunType/convertRunType";
import data from "../data/run_types";
import findObject from "../helpers/findObject/findObject";

import "./RunTypeSlider.scss";

const RunTypeSlider = ({ updateState }) => {
  const [description, setDescription] = useState("");

  const sliderChange = (event) => {
    const runTypeBasedOnSliderValue = convertRunType(
      parseInt(event.target.value)
    );
    const object = findObject(runTypeBasedOnSliderValue, data);

    setDescription(object.description);

    updateState("type", runTypeBasedOnSliderValue);
    updateState("karmaFromRun", object.karma);
  };

  return (
    <Col className="col-12 col-md-6">
      <Row className="justify-content-center">
        <h2>Run Type</h2>
      </Row>
      <Row className="slider justify-content-center">
        <label className="sr-only" htmlFor="runType">
          Choose run type
        </label>
        <input
          type="range"
          className="custom-range"
          min="0"
          max="2"
          id="runType"
          defaultValue="1"
          onChange={sliderChange}
        />
        <span>Good feels</span>
        <span>Standard</span>
        <span>Cold-hearted</span>
        <small>{description}</small>
      </Row>
    </Col>
  );
};

export default RunTypeSlider;
