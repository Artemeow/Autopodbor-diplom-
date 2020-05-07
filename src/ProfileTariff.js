import React, { Component } from "react";
import CardTariff from "./CardTariff";

import { FaExclamation } from "react-icons/fa";

import auto from "./images/auto.jpg";
import auto2 from "./images/auto2.jpg";
import auto3 from "./images/auto3.jpg";

const singleCheck = [
  "Выезд специалиста",
  "Отчёт по осмотру автомобиля",
  "Осмотр кузова",
  "Осмотр салона, электрики и др. узлов",
  "Компьютерная диагностика",
  "Проверка пробега",
  "Экспертные рекомендации",
];

const forADay = [
  "Выезд специалиста",
  "Выезд на осмотр на нашем авто",
  "Неограниченное количество осмотров в рамках 8 ч.",
  "Отчёт по осмотру автомобиля",
  "Осмотр кузова",
  "Осмотр салона, электрики и др. узлов",
  "Компьютерная диагностика",
  "Проверка пробега",
  "Экспертные рекомендации",
];

const fullConstruction = [
  "Индивидуальный подход и консультирование",
  "Поиск и обзвон",
  "Выезд на осмотр на нашем авто",
  "Выезд специалиста",
  "Выезд на осмотр на нашем авто",
  "Отчёт по осмотру автомобиля",
  "Осмотр кузова",
  "Осмотр салона, электрики и др. узлов",
  "Компьютерная диагностика",
  "Проверка пробега",
  "Экспертные рекомендации",
  "Переговоры и торг",
  "Помощь в оформлении",
];

export default class ProfileTariff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tariffs: [
        {
          title: "Разовый просмотр авто",
          price: 100,
          properties: singleCheck,
          bgColor: "rgba(17, 102, 12, 0.8)",
          image: auto,
        },
        {
          title: "Эксперт на день",
          price: 0,
          properties: forADay,
          bgColor: "rgba(18, 29, 117, 0.8)",
          image: auto2,
        },
        {
          title: "Авто под ключ",
          price: 20,
          properties: fullConstruction,
          bgColor: "rgba(158, 75, 16, 0.8)",
          image: auto3,
        },
      ],
    };
  }

  addTariff = (newPrice, title) => {
    const tariff = this.state.tariffs.find((item) => item.title === title);
    tariff.price = newPrice;

    const tariffToChange = { title: tariff.title, price: tariff.price };

    this.props.addTariff(tariffToChange);
  };
  // componentDidMount() {
  //   fetch("http://localhost:8080/autopodbor/tarifftype/all").then((response) =>
  //     response.json().then((data) => {
  //       // let subscriptionsList = [];

  //       // for (let item in data) {
  //       //   subscriptionsList.push({
  //       //     id: data[item].id,
  //       //     duration: data[item].duration,
  //       //     price: data[item].price,
  //       //   });
  //       // }

  //       this.setState({
  //         tariffInfo: data
  //       });
  //     })
  //   );
  // }
  render() {
    return (
      <div
        className="container shadow bg-white rounded pb-5"
        style={{ marginTop: "150px" }}
      >
        <div className="d-flex justify-content-center">
          <h2 className="bg-primary font-weight-normal text-white text-uppercase px-3 py-2 mt-n4">
            Услуги
          </h2>
        </div>
        <div className="container my-5">
          <h3 className="text-center">Введите стоимость своих услуг</h3>
          <h5 className="py-4 text-center">
            <FaExclamation size="40px" className="text-danger" />
            Если некоторой услугой вы не занимаетесь, оставьте поле стоимости
            пустым. Услуга с пустым полем стоимости отображаться у посетителей
            профиля не будет.
          </h5>
          <div className="row justify-content-around">
            {this.state.tariffs.map((tariff) => (
              <div className="col-4" key={tariff.title}>
                <CardTariff
                  properties={tariff.properties}
                  title={tariff.title}
                  bgColor={tariff.bgColor}
                  image={tariff.image}
                  price={tariff.price}
                  addTariff={this.addTariff}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
