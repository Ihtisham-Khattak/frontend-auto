import React from "react";
import { Modal, Button } from "reactstrap";

const confirmation = ({ show, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>Model</Modal.Header>
      <Modal.Body>Are you want to save it</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onConfirm}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default confirmation;
