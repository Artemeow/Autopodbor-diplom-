import React, { Component } from "react";

export default class Feedback extends Component {
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
    return(
      <div></div>
    )
  }
}