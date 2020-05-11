import React, { Component } from "react";

export default class AdminApplication extends Component {
  constructor() {
    super();

    this.state = {
      applications: [
        {
          title: "АвтоПодбор.бел",
          subscribeDuration: "2 недели",
          subscribePrice: "30 руб.",
        },
        {
          title: "Autofind",
          subscribeDuration: "Месяц",
          subscribePrice: "50 руб.",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <table class="table table-info">
          <thead>
            <tr>
              <th>Название</th>
              <th>Срок</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {this.state.applications.map((application) => (
              <tr>
                <td>{application.title}</td>
                <td>{application.subscribeDuration}</td>
                <td>{application.subscribePrice}</td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    Открыть профиль
                  </button>
                </td>
                <td>
                  <button className="btn btn-success btn-sm">
                    Подтвердить
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">Отклонить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
