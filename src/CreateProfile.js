import React, { Component } from "react";
import FieldEditor from "./FieldEditor";
import Subscribe from "./Subscribe";
import ProfileAvatar from "./ProfileAvatar";
import CreateProfileRegion from "./CreateProfileRegion";
import ProfileTariff from "./ProfileTariff";

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
      title: "",
      specification: "",
      address: "",
      experience: "",
      email: "",
      phone: "",
      site: "",
      isEditable: true,
      photo: null,
      subscribe: {},
      tariffs: [],
      citys: [],
    };
  }

  handleChange = (systemFieldName, fieldValue) => {
    this.setState({ [systemFieldName]: fieldValue });
  };

  selectSubs = (subs) => {
    this.setState({ subscribe: subs });
  };

  addCity = (citys) => {
    this.setState({ citys: citys });
  };

  addTariff = (tariff) => {
    const tariffs = this.state.tariffs;

    let index = tariffs.findIndex((item) => item.title === tariff.title);

    if (index === -1) tariffs.push(tariff);
    else if (tariff.price == 0) tariffs.splice(index, 1);
    else tariffs[index].price = tariff.price;

    this.setState({ tariffs: tariffs });
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
        <CreateProfileRegion addCity={this.addCity} />
        <ProfileTariff addTariff={this.addTariff} />
        <Subscribe selectSubs={this.selectSubs} />
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-lg btn-success">Отправить</button>
        </div>
      </div>
    );
  }
}
