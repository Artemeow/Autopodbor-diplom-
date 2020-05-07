import React, { Component, Fragment } from 'react'
import card1 from './images/avtoznatok.jpg'

export default class CardMaster extends Component {
  render() {
    return (
      <Fragment>
        <div className="card m-4 shadow">
          <img src={card1} className="w-75 mx-auto my-2 bg-dark" alt="" height="200px" width="200px"/>
          <div className="card-body text-center">
            <h3 className="card-title font-weight-light mb-4">Avtoznatok</h3>
            <strong className="">Рейтинг:{" "}
              <span className="">
                 9.0
              </span>
            </strong>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-success btn-block btn-lg">Перейти</button>
          </div>
        </div>
      </Fragment>
    )
  }
}