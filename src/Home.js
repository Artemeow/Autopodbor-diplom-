import React, { Component, Fragment } from 'react'
import CardMaster from './CardMaster'
import Timeline from './Timeline'

import pic1 from './images/101.svg'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div style={{backgroundImage: `url(${pic1})`, backgroundSize: "cover", height: "981px"}}>
          <div className="container">
            <h1 className="font-weight-bold text-white" style={{paddingTop: "220px", width: "600px"}}>
              Профессиональный подбор автомобиля
            </h1>
            <h5 className="text-muted mt-4" style={{ width: "570px"}}>
              На нашей платформе Вы найдёте лучших мастеров, занимающихся поиском и подбором подержанных автомобилей, а также проверкой и диагностикой авто перед покупкой. Они подберут для Вас лучший автомобиль на рынке в соответствии с Вашими пожеланиями
            </h5>
            <button className="btn btn-success btn-lg mt-4">
              Посмотреть каталог
            </button>
          </div>
        </div>
        <div className="container text-center">
          <h3 className="text-center font-weight-bold pt-5 m-5" >
            Выбирайте лучших мастеров исходя из рейтинга, составленного по отзывам их клиентов
          </h3>
          <div className="card-deck m-3">
            <CardMaster />
            <CardMaster />
            <CardMaster />
          </div>
          <div className="card-deck m-3">
            <CardMaster />
            <CardMaster />
            <CardMaster />
          </div>
          <button className="btn btn-dark btn-lg w-25 mb-5">Каталог</button>
        </div>
        <div style={{backgroundColor: "#e9fce3"}}>
          <div className="container">
            <h2 style={{paddingTop: "100px"}}>
              <strong>Станьте автоподборщиком</strong> сами, если вы:
            </h2>
            <ul className="p-5" style={{marginLeft: "350px", fontSize: "20px", listStyle: "circle"}}>
              <li>можете проверить техническое состояние автомобиля</li>
              <li>можете пригнать автомобиль из-за границы или из других регионов</li>
              <li>хорошо знакомы с конструктивными особенностями автомобилей</li>
              <li>знаете систему ценообразования</li>
            </ul>
            <h2 >
              Для этого нужно проделать следующие шаги:
            </h2>
            <Timeline />
            <div className="text-center">
              <button className="btn btn-dark btn-lg" style={{marginBottom: "150px"}}>Стать автоподборщиком</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}