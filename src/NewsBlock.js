import React, { Component } from "react";
import NewsItem from "./NewsItem";

import auto from "./images/auto.jpg";
import auto2 from "./images/auto2.jpg";
import auto3 from "./images/auto3.jpg";

export default class NewsBlock extends Component {
  constructor() {
    super();

    this.state = {
      news: [
        {
          date: "12.12.2019",
          time: "9:44",
          header: "Разовый выезд",
          body:
            "🔴крашен правый бок со шпатлевкой\n🔴салон не соответствует пробегу\n🔴двигатель завален\n🔴практически на каждой пластиковой детали экстерьера есть трещины\n🔴белая эмульсия на крышке заливной горловины\n🛠Рекомендовано отказаться от покупки.\n🔦Проверяйте авто перед покупкой, продавец считал, что его авто просто класс👍",
          img: [auto, auto2, auto3],
        },
        {
          date: "14.12.2019",
          time: "12:44",
          header: "Разовый выезд",
          body:
            "🔴крашен правый бок со шпатлевкой\n🔴салон не соответствует пробегу\n🔴двигатель завален\n🔴практически на каждой пластиковой детали экстерьера есть трещины\n🔴белая эмульсия на крышке заливной горловины\n🛠Рекомендовано отказаться от покупки.\n🔦Проверяйте авто перед покупкой, продавец считал, что его авто просто класс👍",
          img: [auto, auto2],
        },
        {
          date: "12.02.2020",
          time: "22:30",
          header: "Разовый выезд",
          body:
            "🔴крашен правый бок со шпатлевкой\n🔴салон не соответствует пробегу\n🔴двигатель завален\n🔴практически на каждой пластиковой детали экстерьера есть трещины\n🔴белая эмульсия на крышке заливной горловины\n🛠Рекомендовано отказаться от покупки.\n🔦Проверяйте авто перед покупкой, продавец считал, что его авто просто класс👍",
        },
        {
          date: "12.12.2020",
          time: "01:00",
          header: "Разовый выезд",
          body:
            "🔴крашен правый бок со шпатлевкой\n🔴салон не соответствует пробегу\n🔴двигатель завален\n🔴практически на каждой пластиковой детали экстерьера есть трещины\n🔴белая эмульсия на крышке заливной горловины\n🛠Рекомендовано отказаться от покупки.\n🔦Проверяйте авто перед покупкой, продавец считал, что его авто просто класс👍",
          img: [auto],
        },
      ],

      showImg: null,
      activeIndex: null,
    };
  }

  handleClick = () => {
    // fetch("http://localhost:8080/autopodbor/news/all").then((response) =>
    //   response.json().then((data) => {

    //     this.setState({
    //       subscriptions: data,
    //     });
    //   })
    // );
    let oldNews = this.state.news.slice();
    let newNews = this.state.news[3];
    oldNews.push(newNews);

    this.setState({ news: oldNews });
  };

  render() {
    return (
      <>
        <div
          className="container pb-5 bg-white shadow"
          style={{ marginTop: "150px" }}
        >
          <div className="d-flex justify-content-center">
            <h2 className="bg-primary font-weight-normal text-white text-uppercase px-3 py-2 mt-n4">
              Новости
            </h2>
          </div>
          <div className="overflow-auto" style={{ height: "550px" }}>
            {this.state.news.map((item) => (
              <NewsItem newsItem={item} />
            ))}
            <button
              className="btn btn-success d-block mx-auto my-2"
              onClick={this.handleClick}
            >
              Загрузить ещё
            </button>
          </div>
        </div>
      </>
    );
  }
}
