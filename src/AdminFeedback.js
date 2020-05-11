import React, { Component } from "react";

export default class AdminFeedback extends Component {
  constructor() {
    super();

    this.state = {
      messages: [
        {
          topic: "Кнопка новости",
          profileName: "Avtoznatok",
          content:
            "Добрый день. Чтобы добавить новость, нужно зайти в свой профиль, промотать в конец страницы и только тогда будет кнопка добавить новость. Сделайте кнопку для перехода к новостям в навигационной панели. Спасибо",
        },
        {
          topic: "Виды подписок",
          profileName: "Автогарант",
          content: "Сделай больше вариантов подписки. Например на 3 месяца",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <table class="table table-success pr-1">
          <thead>
            <tr>
              <th>Тема</th>
              <th>Отправитель</th>
              <th>Содержание</th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map((message) => (
              <tr>
                <td>{message.topic}</td>
                <td>{message.profileName}</td>
                <td className="w-75">{message.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
