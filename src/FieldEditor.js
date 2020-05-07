import React, { Component } from "react";

import { FaBan } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default class FieldEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      newFieldValue: "",
    };
  }

  handleEditClick = () => {
    this.setState({edit: !this.state.edit});
  };

  handleOkClick = () => {
    this.handleEditClick();

    const { handleChange, systemFieldName } = this.props;
    handleChange(systemFieldName, this.state.newFieldValue);
  };

  handleBlur = (e) => {
    this.setState({ newFieldValue: e.target.value });
  };

  render() {
    const { fieldName, fieldValue, isEditable } = this.props;

    return (
      <div className="row m-0 py-2">
        <h5 className="pl-4 col-4 text-muted mb-3">{fieldName}</h5>
        {this.state.edit ? (
          <>
            <input
              type="text"
              className="col-6"
              defaultValue={fieldValue}
              autoFocus
              onBlur={this.handleBlur}
            />
            <div className="col-2 row d-flex justify-content-around m-0">
              <button
                className="col-5 btn btn-sm btn-outline-success rounded-circle mw-100"
                onClick={this.handleOkClick}
              >
                <FaCheck size="22px" />
              </button>
              <button
                className="col-5 btn btn-sm btn-outline-danger rounded-circle mw-100"
                onClick={this.handleEditClick}
              >
                <FaBan size="22px" />
              </button>
            </div>
          </>
        ) : (
          <>
            <h5 className="col-7 text-break">{fieldValue}</h5>
            {isEditable && (
              <button
                className="col-1 btn btn-sm btn-outline-success"
                onClick={this.handleEditClick}
                style={{height: "38px"}}
              >
                <FaPen size="18px" />
              </button>
            )}
          </>
        )}
      </div>
    );
  }
}
