import React, { useState } from "react";
import moment, { calendarFormat } from "moment";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";

const AddSobitieCalendar = () => {
  const [show, setShow] = useState(false);
  const handClose = () => setShow(false);
  const handShow = () => setShow(true);

  return (
    <>
      <Button onClick={handShow}>Добавить событие</Button>
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

export default AddSobitieCalendar;
