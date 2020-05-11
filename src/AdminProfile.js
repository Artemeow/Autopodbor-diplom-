import React, { Component } from "react";

export default class AdminProfile extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [
        {
          title: "Avtoznatok",
          email: "avtoznatok@mail.ru",
          isBlocked: false,
        },
        {
          title: "Автогарант",
          email: "avtogarant@gmail.com",
          isBlocked: false,
        },
        {
          title: "Avtopodbor",
          email: "avtopodbor@mail.ru",
          isBlocked: true,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Название</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.profiles.map((profile) => (
              <tr>
                <td>{profile.title}</td>
                <td>{profile.email}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Открыть профиль</button>
                </td>
                <td>
                  {profile.isBlocked ? (
                    <button className="btn btn-success btn-sm">
                      Разблокировать
                    </button>
                  ) : (
                    <button className="btn btn-danger btn-sm">
                      Заблокировать
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
