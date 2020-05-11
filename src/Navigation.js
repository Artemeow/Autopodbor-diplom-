import React, { Component } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
// import { UserContext } from "./App";
import { MdPermIdentity } from "react-icons/md";
import avatar from "./images/avtoznatok.jpg"; //здесь должна быть автарка чела, который зашёл (если у него нет аватара, то стандартная ава)

import logo from "./images/logo.png";
import { Link } from "@reach/router";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: "",
      subsDuration: 0,
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

    const renderTooltip = (props) => {
      const tooltip = "Нажмите, чтобы продлить";

      return (
        <Tooltip id="button-tooltip" color="white" {...props}>
          {this.state.subsDuration > 0 ? (tooltip) : ("Ваш профиль не отображается в каталоге. " + tooltip)}
        </Tooltip>
      );
    }

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
          {/* <UserContext.Consumer> */}
          {/* {({user, photo}) => ( */}
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
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 200 }}
              overlay={renderTooltip}
            >
              <button
                className="btn btn-transparent px-0 text-warning mr-5"
                // style={{ width: "180px" }}
              >
                <span className="">
                  Подписка:{" "}
                  {this.state.subsDuration > 0
                    ? this.state.subsDuration + " дн."
                    : (<span className="text-danger"> окончена</span>)}
                  <span className="ml-2">
                    {/* <FaHistory /> */}
                  </span>
                </span>
              </button>
            </OverlayTrigger>
          )}
          {user && (
            <Dropdown>
              <span
                className="mr-2"
                style={{ color: "white", }}
              >
                {user}
              </span>
              <Dropdown.Toggle
                variant="bg-transparent"
                id="dropdown-basic"
                className="py-0 border-0"
              >
                <img src={avatar} height="40px" className="rounded-circle" />

                {/* <MdPermIdentity fontSize="24px" /> */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Стать автоподборщиком
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Написать администратору</Dropdown.Item>
                <Dropdown.Item onClick={() => logOut()}>Выход</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {/* </UserContext.Consumer> */}
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
