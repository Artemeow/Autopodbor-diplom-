import React, { Fragment, Component } from "react";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";
import "webix/webix.css";

import Navigation from "./Navigation";
import Home from "./Home";
import Test from "./Test";
import Profile from "./Profile";
import EditableProfile from "./EditableProfile";
import CreateProfile from "./CreateProfile";
import Subscribe from "./Subscribe";
import NewsBlock from "./NewsBlock";

import avatar from "./images/avtoznatok.jpg";
import Admin from "./Admin";

// export const UserContext = React.createContext({
//   user: null,
//   photo: null
// })

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      password: null,
      // photo: avatar
    };
  }

  logInUser = (name) => {
    this.setState({ user: name });
  };

  logOutUser = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <>
        {/* // <UserContext.Provider value={this.state.user}> */}
        <Navigation
          user={this.state.user}
          logIn={this.logInUser}
          logOut={this.logOutUser}
        />

        <Router>
          <Home path="/" />
          <CreateProfile path="/profile/create" />
          <EditableProfile path="/profile/edit" />
          <Profile path="/profile" />
          <Test path="/test" />
          <Subscribe path="/subscribe" />
          <NewsBlock path="/news" />
          <Admin path="/admin" />
        </Router>
        {/* // </UserContext.Provider> */}
      </>
    );
  }
}
