import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalTitle } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ModalFooter } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


export default class RegisterForm extends Component {
  constructor(props) {
    super();

    this.state = {
      name: null,
      email: null,
      onePass: null, 
      twoPass: null
    }
  }

  handleBlur(e) {
    // fffffffffffffffffffffffff
  }

  handleSubmit(e) {
    let registrationInfo = {
      // dfffffffffffffffffff
    }
  }

  render() {
    const { close } = this.props;

    return (
      <Modal show={true} onHide={() => close()}>
        <Modal.Header closeButton>
          <ModalTitle>Зарегистрируйтесь</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formBasicName">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control type="text" placeholder="Введите имя" name="name" onBlur={() => this.handleBlur}/>
              <Form.Text className="text-muted">
                Под этим именем вас будут знать другие пользователи портала.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Эл. почта</Form.Label>
              <Form.Control type="email" placeholder="Введите почтовый адрес" name="email" onBlur={() => this.handleBlur}/>
            </Form.Group>

            <Form.Group controlId="formBasicPasswordOne">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Ваш пароль" name="onePass" onBlur={() => this.handleBlur}/>
            </Form.Group>
            <Form.Group controlId="formBasicPasswordTwo">
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control type="password" placeholder="Ваш пароль" name="twoPass" onBlur={() => this.handleBlur}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <ModalFooter>
          <Button variant="danger" >
            Зарегистрироваться
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}