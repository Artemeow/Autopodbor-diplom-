import React, { Component } from "react";

import { FaCheck } from "react-icons/fa";

export default class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedRating: null,
    };
  }

  handleSelect = (item) => {
    this.setState({ selectedRating: item });
  };

  render() {
    return (
      <>
        <div className="container my-5 py-1">
          <span className="h4 mr-5">Оценить работу автоподборщика на </span>
          {this.state.rating.map((item) => (
            <button
              className="btn btn-lg btn-outline-warning mr-2"
              onClick={() => this.handleSelect(item)}
            >
              {item == this.state.selectedRating ? (
                <FaCheck size="20px" className="text-dark" />
              ) : (
                item
              )}
            </button>
          ))}
          {this.state.selectedRating != null && (
            <div className="h4 text-center text-success my-3">
              Спасибо за отзыв!
            </div>
          )}
        </div>
      </>
    );
  }
}
