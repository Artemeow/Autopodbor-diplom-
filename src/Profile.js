import React, { Component } from "react";
import FieldEditor from "./FieldEditor";
import ProfileAvatar from "./ProfileAvatar";
import ProfileRegion from "./ProfileRegion";
import ProfileTariff from "./ProfileTariff";
import NewsBlock from "./NewsBlock";
import Rating from "./Rating";
import CommentBlock from "./CommentBlock";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contactDetails: [
        {
          fieldName: "Название",
          value: "Avtoznatok",
        },
        {
          fieldName: "Описание",
          value:
            "Профессионально подберем и проверим авто более чем по 130 параметрам. Сэкономим до 10% стоимости авто",
        },
        {
          fieldName: "Адрес",
          value: "ул. Радужная 10, Минск",
        },
        {
          fieldName: "Опыт работы",
          value: "5 лет",
        },
        {
          fieldName: "E-mail",
          value: "avtoznatok@mail.ru",
        },
        {
          fieldName: "Телефон",
          value: "+375 44 3323424",
        },
        {
          fieldName: "Сайт",
          value: "avtoznatok.by",
        },
      ],
      photo: null,
    };
  }

  render() {
    return (
      <div className="bg-light py-5">
        <div className="container mb-5">
          <div className="row shadow bg-white rounded">
            <div className="col-4 p-4">
              <ProfileAvatar />
            </div>
            <div className="col-8 p-4">
              {this.state.contactDetails.map((item) => (
                <FieldEditor
                  fieldName={item.fieldName}
                  fieldValue={item.value}
                />
              ))}
            </div>
          </div>
        </div>
        <ProfileRegion />
        <ProfileTariff />
        <NewsBlock />
        <Rating />
        <CommentBlock />
      </div>
    );
  }
}
