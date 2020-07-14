import react, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

function RestaurantModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Body>
          <p>Selecione a quantidade desejada</p>
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.handleModal}>Adicionar ao carrinho</button>
        </Modal.Footer>
      </Modal.Header>
    </Modal>
  );
}

export default RestaurantModal;
