import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

// const subscriptionTerms = {
//   week: "Неделя",
//   twoWeeks: "2 недели",
//   month: "Месяц",
// };

export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSubscriptionTerm: "Выбрать",
      subscriptions: [],
    };
  }

  handleSelect = (selectedSubs) => {
    this.setState({ selectedSubscriptionTerm: selectedSubs.duration });
    this.props.selectSubs(selectedSubs);
  };

  componentDidMount() {
    fetch("http://localhost:8080/autopodbor/subscribe/all").then((response) =>
      response.json().then((data) => {
        // let subscriptionsList = [];

        // for (let item in data) {
        //   subscriptionsList.push({
        //     id: data[item].id,
        //     duration: data[item].duration,
        //     price: data[item].price,
        //   });
        // }

        this.setState({
          subscriptions: data,
        });
      })
    );
  }

  render() {
    return (
      <div
        className="container shadow bg-white rounded pb-5"
        style={{ marginTop: "150px" }}
      >
        <div className="d-flex justify-content-center">
          <h2 className="bg-primary font-weight-normal text-white text-uppercase px-3 py-2 mt-n4">
            Подписка
          </h2>
        </div>
        <h3 className="text-center text-muted py-5">Выберите срок подписки</h3>
        <div className="d-flex justify-content-center pb-5">
          <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              <span className="px-4">
                {this.state.selectedSubscriptionTerm}
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.subscriptions.map((item) => (
                <Dropdown.Item
                  key={item.id}
                  onClick={() => this.handleSelect(item)}
                >
                  {item.duration}
                  <span className="float-right badge badge-primary mt-1">
                    {item.price}$
                  </span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
