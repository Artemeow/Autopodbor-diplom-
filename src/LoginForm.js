import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalTitle } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ModalFooter } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import logo from './images/logo.png'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      pass: null
    }
  }

  handleBlur = (e) => {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit = (e) => {
    this.props.logIn(this.state.name);
    // ????F>:D<:F<DF<PDdopisat
    this.props.close();
  }

  render() {
    const { close } = this.props;

    return (
      <Modal show={true} onHide={() => close()}>
        <Modal.Header closeButton>
          <ModalTitle className="mx-auto">
            <img height="40" src={logo} alt="logo" /> 
            Войти в Autopodbor
          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control type="text" placeholder="Введите имя" name="name" onBlur={this.handleBlur}/>
            </Form.Group>
            <Form.Group controlId="formBasicPasswordOne">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Ваш пароль" name="pass" onBlur={this.handleBlur}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <ModalFooter className="text-center">
          <Button className="w-50 mx-auto" variant="danger" type="submit" onClick={this.handleSubmit}>
            Войти
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}