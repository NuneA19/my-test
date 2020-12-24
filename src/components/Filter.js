import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

class Filter extends Component {
  handleChange = (ev) => {
    this.props.handleChange(ev.target.name);
  };
  render() {
    return (
      <div className="checkboxes">
        <Checkbox
          name="name"
          checked={this.props.columnName === "name"}
          onChange={this.handleChange}
        />
        <label>Name</label>
        <Checkbox
          name="dob"
          checked={this.props.columnName === "dob"}
          onChange={this.handleChange}
        />
        <label>Age</label>
      </div>
    );
  }
}
Filter.propTypes = {
  columnName: PropTypes.string,
};
export default Filter;
