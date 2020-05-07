import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as webix from "webix";

import { FaCheckDouble } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";

export default class CreateProfileRegion extends Component {
  constructor() {
    super();
    this.state = {
      regionIsConfirmed: false,
      regionSelected: false,
    };
  }

  handleItemCheck = (e) => {
    const citys = [];
    e.forEach((elem) => {
      elem = String(elem); //перевод в строковое
      const index = elem.indexOf("."); //если точка в строке найдена возвращает её индекс, иначе -1
      if (index == -1) return; //если точка не найдена - переходим к следующему
      const id = elem.slice(index + 1); //то, что после точки  - id
      citys.push(id);
    });

    if (citys.length == 0) this.setState({ regionSelected: false });
    else this.setState({ regionSelected: true });
    this.props.addCity(citys);
    this.setState({ regionIsConfirmed: false });
  };

  handleRegionConfirmed = () => {
    this.setState({ regionIsConfirmed: true });
  };

  render() {
    return (
      <div
        className="container shadow bg-white rounded pb-5"
        style={{ marginTop: "150px" }}
      >
        <div className="d-flex justify-content-center">
          <h2 className="bg-primary font-weight-normal text-white text-uppercase px-3 py-2 mt-n4">
            Регион
          </h2>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-5 font-weight-light ">
            <p className="mb-5">
              <FaChevronCircleDown
                className={
                  this.state.regionSelected ? "text-success" : "text-danger"
                }
                size="22px"
              />{" "}
              Выберите регион, в котором будете предоставлять услуги (может быть
              несколько городов; область)
            </p>
            <p>
              <FaChevronCircleDown
                className={
                  this.state.regionIsConfirmed ? "text-success" : "text-danger"
                }
                size="22px"
              />{" "}
              Сохраните изменения нажатием кнопки{" "}
              <span className="badge badge-success">
                Подтвердить
                <br />
                <FaCheckDouble />
              </span>
            </p>
          </div>
          <div className="col-4">
            <div ref="root"></div>
          </div>
          <div>
            <button
              className="btn btn-success btn-lg"
              disabled={!this.state.regionSelected && true}
              onClick={this.handleRegionConfirmed}
            >
              Подтвердить
              <br />
              <FaCheckDouble />
            </button>
          </div>
        </div>
        {/* <div className="d-flex just2ify-content-center pb-5">
          
        </div> */}
      </div>
    );
  }

  componentDidMount() {
    const handleItemCheck = (e) => this.handleItemCheck(e);

    this.ui = webix.ui({
      container: ReactDOM.findDOMNode(this.refs.root),
      view: "tree",
      template: "{common.icon()} {common.checkbox()} <span>#value#</span>",
      width: 300,
      height: 220,
      threeState: true,
      url: "http://localhost:8080/autopodbor/region/all",
      on: {
        onItemCheck: function () {
          handleItemCheck(this.getChecked());
        },
      },
    });
  }

  componentWillUnmount() {
    this.ui.destructor();
    this.ui = null;
  }
}
