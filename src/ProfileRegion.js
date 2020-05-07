import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";

import { FaAngleDown } from "react-icons/fa";

export default class ProfileRegion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: [
        {
          oblast: "Минская обл.",
          goroda: ["Минск", "Минеск", "Минеральные воды", "Пинск", "Гнинск"],
        },
        {
          oblast: "Гродненская обл.",
          goroda: ["Гродно", "Гродно", "Гродно", "Гродно", "Гродно"],
        },
        {
          oblast: "Гомельская обл.",
          goroda: ["Гродно", "Гродно", "Гродно", "Гродно", "Гродно"],
        },
        {
          oblast: "Брестская обл.",
          goroda: ["Гродно", "Гродно", "Гродно", "Гродно", "Гродно"],
        },
        {
          oblast: "Витебская обл.",
          goroda: ["Гродно", "Гродно", "Гродно", "Гродно", "Гродно"],
        },
        {
          oblast: "Могилёвская обл.",
          goroda: ["Гродно", "Гродно", "Гродно", "Гродно", "Гродно"],
        },
      ],
      deciredCity: "",
    };
  }

  handleChange = (e) => {
    this.setState({ deciredCity: e.target.value });
  };

  render() {
    return (
      <div className="container mb-5 shadow bg-white rounded py-5">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <button className="btn btn-primary d-flex justify-content-center w-100">
                <FaAngleDown size="30px" className="ml-5 my-2" />
                <h2 className="font-weight-normal text-white text-uppercase px-3">
                  Регион услуг
                </h2>
                <FaAngleDown size="30px" className="mr-5 my-2" />
              </button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4 className="text-center text-success">Услуги распространяются на перечисленные города</h4>
                <div className="d-flex w-50 mx-auto my-4">
                  <input
                    className="form-control mr-3"
                    placeholder="Подсветите нужный город"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="row">
                  {this.state.region.map((item) => (
                    <div className="col px-1">
                      <h5>{item.oblast}</h5>
                      {item.goroda.map((gorod) =>
                        gorod
                          .toUpperCase()
                          .includes(this.state.deciredCity.toUpperCase()) &&
                        this.state.deciredCity !== "" ? (
                          <div
                            className="pl-3"
                            style={{ textShadow: "red 0 0 10px" }}
                          >
                            {gorod}
                          </div>
                        ) : (
                          <div className="pl-3">{gorod}</div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
