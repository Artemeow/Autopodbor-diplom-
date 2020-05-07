import React, { Component } from "react";

import { FaCheck } from "react-icons/fa";

export default class CardService extends Component {
  constructor() {
    super();
    this.state = { isOpen: false, price: 0 };
  }

  handleOpenClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChangePrice = (e) => {
    const newPrice = e.target.value;
    const title = this.props.title;

    this.props.addTariff(newPrice, title);
  };

  render() {
    const { properties, title, price, bgColor, image } = this.props;

    const property = properties.map((number) => (
      <div className="bg-light p-3 border-bottom border-danger">
        <FaCheck />
        <span>{" " + number}</span>
      </div>
    ));

    return (
      <>
        <div className="card border-0">
          <img
            src={image}
            className="card-img"
            alt="auto"
            style={{ height: "200px" }}
          />
          <div
            className="card-img-overlay text-center text-white py-2"
            style={{
              backgroundColor: bgColor,
            }}
          >
            <input
              type="text"
              defaultValue={price}
              className="text-right border-0 text-white"
              style={{
                width: "130px",
                fontSize: "60px",
                background: "transparent",
              }}
              onBlur={this.handleChangePrice}
            />
            <sup style={{ fontSize: "18px", verticalAlign: "super" }}>руб.</sup>
            <h4 className="font-weight text-monospace">{title}</h4>
          </div>
        </div>
        {this.state.isOpen ? (
          <>
            <button
              className="btn btn-lg btn-warning w-100 border-0 rounded-0"
              onClick={this.handleOpenClick}
            >
              Скрыть
            </button>
            {property}
          </>
        ) : (
          <button
            className="btn btn-lg btn-secondary w-100 border-0 rounded-0"
            onClick={this.handleOpenClick}
          >
            Подробности
          </button>
        )}
      </>
    );
  }
}
