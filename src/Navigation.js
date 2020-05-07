import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

import { MdPermIdentity } from "react-icons/md";

import logo from "./images/logo.png";
import { Link } from "@reach/router";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: "",
    };
  }

  showModal(name) {
    this.setState({ showModal: name });
  }

  closeModal = () => {
    this.setState({ showModal: "" });
  };

  render() {
    const { user, logIn, logOut } = this.props;

    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top bg-dark">
          <a className="navbar-brand p-0" href="#">
            <img height="40" src={logo} alt="logo" />
          </a>

          <div className="navbar-nav font-weight-bold mr-auto">
            <Link className="nav-link text-white ml-3" to="/">
              Главная
            </Link>
            <a className="nav-link text-white ml-3" href="#">
              Cсылка 2
            </a>
            <a className="nav-link text-white ml-3" href="#">
              Cсылка 3
            </a>
          </div>

          {user == null && (
            <button
              className="btn btn-secondary btn-sm mr-2"
              onClick={(e) => this.showModal("login")}
            >
              Войти
            </button>
          )}
          {user == null && (
            <button
              className="btn btn-primary btn-sm mr-5"
              onClick={(e) => this.showModal("register")}
            >
              Регистрация
            </button>
          )}
          {user && (
            <Dropdown>
              <span
                className="mr-2"
                style={{ color: "white", fontSize: "18px" }}
              >
                {user}
              </span>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <MdPermIdentity fontSize="24px" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Стать автоподборщиком
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item onClick={() => logOut()}>Выход</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </nav>
        {this.state.showModal === "register" && (
          <RegisterForm close={this.closeModal} />
        )}
        {this.state.showModal === "login" && (
          <LoginForm close={this.closeModal} logIn={logIn} />
        )}
      </>
    );
  }
}
