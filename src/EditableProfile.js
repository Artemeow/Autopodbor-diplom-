import React, { Component } from "react";
import FieldEditor from "./FieldEditor";
import ProfileAvatar from "./ProfileAvatar";
import ProfileRegion from "./ProfileRegion";
import ProfileTariff from "./ProfileTariff";
import NewsBlock from "./NewsBlock";
import CreateProfileRegion from "./CreateProfileRegion";

const fieldNames = {
  title: "Название",
  specification: "Описание",
  address: "Адрес",
  experience: "Опыт работы",
  email: "E-mail",
  phone: "Телефон",
  site: "Сайт",
};

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      title: "Avtoznatok",
      specification:
        "Профессионально подберем и проверим авто более чем по 130 параметрам. Сэкономим до 10% стоимости авто",
      address: "ул. Радужная 10, Минск",
      experience: "5 лет",
      email: "avtoznatok@mail.ru",
      phone: "+375 44 3323424",
      site: "avtoznatok.by",
      isEditable: true,
      photo: null,
    };
  }

  handleChange = (systemFieldName, fieldValue) => {
    this.setState({ [systemFieldName]: fieldValue });
  };

  render() {
    return (
      <div className="bg-light py-5">
        <div className="container mb-5">
          <div className="row shadow bg-white rounded">
            <div className="col-4 p-4">
              <ProfileAvatar />
            </div>
            <div className="col-8 p-4">
              <FieldEditor
                fieldName={fieldNames.title}
                fieldValue={this.state.title}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="title" //чтобы засетать в поле стейта(название поля)
              />
              <FieldEditor
                fieldName={fieldNames.specification}
                fieldValue={this.state.specification}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="specification"
              />
              <FieldEditor
                fieldName={fieldNames.address}
                fieldValue={this.state.address}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="address"
              />
              <FieldEditor
                fieldName={fieldNames.experience}
                fieldValue={this.state.experience}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="experience"
              />
              <FieldEditor
                fieldName={fieldNames.email}
                fieldValue={this.state.email}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="email"
              />
              <FieldEditor
                fieldName={fieldNames.phone}
                fieldValue={this.state.phone}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="phone"
              />
              <FieldEditor
                fieldName={fieldNames.site}
                fieldValue={this.state.site}
                isEditable={this.state.isEditable}
                handleChange={this.handleChange}
                systemFieldName="site"
              />
            </div>
          </div>
        </div>
        <CreateProfileRegion />
        <ProfileTariff />
        <NewsBlock />
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-lg btn-success">Сохранить</button>
        </div>
      </div>
    );
  }
}
