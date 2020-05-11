import React, { Component } from "react";
import avatar from "./images/no_avatar.jpg";
import { ProgressBar, Tab, Row, Col, Nav } from "react-bootstrap";

// import { AiOutlineLike } from "react-icons/ai";
// import { AiOutlineDislike } from "react-icons/ai";

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [
        {
          title: "Avtoznatok",
          email: "avtoznatok@mail.ru",
          isBlocked: false,
        },
        {
          title: "Автогарант",
          email: "avtogarant@gmail.com",
          isBlocked: false,
        },
        {
          title: "Avtopodbor",
          email: "avtopodbor@mail.ru",
          isBlocked: true,
        },
      ],
    };
  }

  render() {
    const now = 9;
    return (
      <>
        <div className="container-fluid py-3 mb-4 border border-dark">
          <h4>Панель управления</h4>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column h5">
                <Nav.Item>
                  <Nav.Link eventKey="first">Профили</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Заявки</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Подписки</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Обратная связь</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="bg-light">
                <Tab.Pane eventKey="third">Tab one</Tab.Pane>
                <Tab.Pane eventKey="second">Подписки</Tab.Pane>
                <Tab.Pane eventKey="first">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Название</th>
                        <th>Email</th>
                        {/* <th></th> */}
                        {/* <th></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.profiles.map((profile) => (
                        <tr>
                          <td>{profile.title}</td>
                          <td>{profile.email}</td>
                          <td>
                            <button className="btn btn-primary btn-sm">
                              Открыть
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-secondary btn-sm">
                              {profile.isBlocked
                                ? "Разблокировать"
                                : "Заблокировать"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="four">Обратная связь</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* handleChangeText = (e) => {                           TEXTAREA
    const characters = new String(e.target.value);
    const needRows = this.state.rows + 1;
    console.log(characters.length >= this.state.charsPerLine);
    if (characters.length >= this.state.charsPerLine)
      this.setState({ text: characters, rows: needRows});
    else this.setState({ text: characters });
  }; */}
        {/* <textarea
         
         rows={this.state.rows}
         cols={this.state.charsPerLine}
         style={{ resize: "none", overflow: "hidden"}}
         placeholder="Оставьте комментарий"
         onChange={this.handleChangeText}
       /> */}

        {/* <div className="col h5 pt-2"         ЛАЙКИ>
              <div className="row">
                <span className="text-success col-6">
                  <span
                    className="p-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleChangeEvaluation("like")}
                  >
                    {this.state.evaluation == "like" ? (
                      <AiOutlineLike size="28px" />
                    ) : (
                      <AiOutlineLike />
                    )}
                  </span>
                  {this.state.comment[0].like}
                </span>
                <span className="text-danger col">
                  <span
                    className="p-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleChangeEvaluation("dislike")}
                  >
                    {this.state.evaluation == "dislike" ? (
                      <AiOutlineDislike size="28px" />
                    ) : (
                      <AiOutlineDislike />
                    )}
                  </span>
                  {this.state.comment[0].dislike}
                </span>
              </div>
            </div>
          </div> */}
      </>
    );
  }
}
