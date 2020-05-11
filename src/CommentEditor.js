import React, { Component } from "react";

import avatar from "./images/no_avatar.jpg";

export default class CommentEditor extends Component {
  constructor() {
    super();
    //Если в контексте юзер залогинен, то в "Оставьте комментарий" должна быть его фото и ему не нужно вводить имя
    this.state = {
      edit: false,
      text: "",
    };
  }

  handleEdit = (type) => {
    this.setState({ edit: type });
  };

  handleChangeText = (e) => {
    this.setState({ text: e.target.value });
  };

  componentDidMount() {
    this.props.edit != undefined && this.setState({ edit: this.props.edit });
  }

  render() {
    return (
      <>
        <div className="row mb-5 mt-4">
          <div className="col-1">
            <img src={avatar} height="50px" className="rounded-circle" />
          </div>
          <div className="col py-auto">
            <div className="row">
              <input
                type="text"
                placeholder="Оставьте комментарий"
                className="mt-2 w-100 bg-light"
                style={{ border: 0, borderBottom: "1px solid black" }}
                onClick={() => this.handleEdit(true)}
                onChange={this.handleChangeText}
              />
            </div>
            {this.state.edit == true && (
              <div className="row mt-2 justify-content-between">
                <div className="col px-0 input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Имя*</span>
                  </div>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-danger mr-3"
                    onClick={() =>
                      //если пропс cancel не передан, то сработает стандартная обработка, иначе та, которую передали
                      this.props.handleCancel == undefined
                        ? this.handleEdit(false)
                        : this.props.handleCancel()
                    }
                  >
                    Отмена
                  </button>
                  <button
                    className="btn btn-dark"
                    disabled={this.state.text.length == 0}
                  >
                    Оставить комментарий
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
