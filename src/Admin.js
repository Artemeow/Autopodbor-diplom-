import React, { Component } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import AdminProfile from "./AdminProfile";
import AdminApplication from "./AdminApplication";
import AdminSubscription from "./AdminSubscription";
import AdminFeedback from "./AdminFeedback";

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container-fluid py-3 mb-4 border border-dark">
          <h4>Панель управления</h4>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="profiles">
          <Row className="mx-3">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column h5">
                <Nav.Item>
                  <Nav.Link eventKey="profiles">Профили</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="applications">Заявки</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="subscribes">Подписки</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="feedback">Обратная связь</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="px-0">
              <Tab.Content className="bg-light">
                <Tab.Pane eventKey="profiles">
                  <AdminProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="applications">
                  <AdminApplication />
                </Tab.Pane>
                <Tab.Pane eventKey="subscribes">
                  <AdminSubscription />
                </Tab.Pane>
                <Tab.Pane eventKey="feedback">
                  <AdminFeedback />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    );
  }
}
