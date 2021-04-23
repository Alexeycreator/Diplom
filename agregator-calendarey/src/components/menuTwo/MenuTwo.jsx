import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  Modal,
  ModalBody,
} from "react-bootstrap";

const MenuTwo = () => {
  const [show, setShow] = useState(false);
  const handClose = () => setShow(false);
  const handShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Первая попытка</Navbar.Brand>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/users">Users</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav>
            <Button onClick={handShow}>Добавить событие</Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить событие</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromSobitie">
              <Form.Label>Событие</Form.Label>
              <Form.Control
                type="sobitie"
                placeholder="Введите событие"
              ></Form.Control>
              <Form.Text className="text-muted">
                Добавьте новое событие
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MenuTwo;
