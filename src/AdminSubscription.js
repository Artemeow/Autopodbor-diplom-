import React, { Component } from "react";

export default class AdminSubscription extends Component {
  constructor() {
    super();

    this.state = {
      subscriptions: [
        {
          duration: "месяц",
          price: "50 руб.",
        },
        {
          duration: "2 недели",
          price: "30 руб.",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="px-5"><button className="btn btn-info float-right">Добавить подписку</button></div>
        <table class="table">
          <thead>
            <tr>
              <th>Срок</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subscriptions.map((subscription) => (
              <tr>
                <td>{subscription.duration}</td>
                <td>{subscription.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
