import React from "react";
import { Button, Modal, Placeholder } from "rsuite";

function CustomModal({ open, onClose,titleModal,children }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} size="lg" overflow={false}>
      <Modal.Header>
        <Modal.Title>{titleModal}</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
