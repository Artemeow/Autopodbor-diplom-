import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as webix from 'webix';

import './Timeline.css'

export default class Timeline extends Component {
  render() {
    return (
      <div ref='root'></div>
    )
  };
  
  componentDidMount(){
    this.ui = webix.ui({
      container: ReactDOM.findDOMNode(this.refs.root),
        cols: [{},
          {
            view: "timeline",
            width: 500,
            height: 500,
            css: "how-to-become-master",
            type: {
              css: "value",
              height: 110,
              lineColor: "black",
              type: "alternate"
            },
            data: [{
                value: "Регистрация",
                details: "Создайте аккаунт на нашей платформе"
              },
              {
                value: "Профиль",
                details: 'Создайте собственный профиль на вкладке "Стать автоподборщиком"',
              },
              {
                value: "Платная подписка",
                details: "Отправьте профиль на модерацию, выбрав срок платной подписки. Время ожидания ответа ~ 1 день"
              },
              {
                value: "Ожидание",
                details: "После положительного ответа ваш профиль появится в каталоге. Желаем удачи!"
              }
            ]
          },
          {}
        ]
    })

  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  shouldComponentUpdate(){
    return false;
  }
}