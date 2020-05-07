import React, { Component } from "react";

import avatar from "./images/no_avatar.jpg";

export default class ProfileAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
  }

  handleAvatarLoad = (e) => {
    const value = e.target.value;
    this.setState({photo: value})
  }
  
  render() {
    return (
      <>
        <img
          className="img-thumbnail w-100"
          src={this.state.photo == null && avatar}
          alt="user_photo"
        />
        {this.state.photo ? (
          <>
            <button className="btn btn-success w-100 mt-3">Сохранить</button>
          </>
        ) : (
          <>
            <input
              id="file"
              type="file"
              className="d-none"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => this.handleAvatarLoad(e)}
            />
            <label htmlFor="file" className="btn btn-warning w-100 mt-3">
              Загрузить фото
            </label>
          </>
        )}
      </>
    );
  }
}
