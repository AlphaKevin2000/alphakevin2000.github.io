import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export const defaultProps = {
  requiredData: [],
  show: false,
  toggleAction: () => console.log("default toggle action"),
  action: () => console.log("default action"),
  toggleButtonText: "default text",
  actionButtonText: "default text",
  toggleButtonVariant: "success",
  actionButtonVariant: "success",
  style: {
    margin: "25px",
    padding: "25px",
    backgroundColor: "#1abc9c",
    border: "solid #eee 2px",
    color: "#2c3e50",
    borderRadius: "25px",
    cursor: "move"
  }
}

export const ButtonWithModalComponent = props => {
  const {
    show,
    requiredData,
    toggleButtonText,
    actionButtonText,
    toggleButtonVariant,
    actionButtonVariant,
    toggleAction,
    action,
    parentUUID,
    style
  } = props
  return (
    <div style={{ textAlign: "center" }}>
      <Button variant={toggleButtonVariant} onClick={() => toggleAction(!show, parentUUID)}>
        {toggleButtonText}
      </Button>
      <Modal show={show} onHide={() => toggleAction(false, parentUUID)}
        size="lg"
        centered
      >
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant={actionButtonVariant} disabled={requiredData.some(d => ["", null, undefined].includes(d))} block
            onClick={action}>
            {actionButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ButtonWithModalComponent.defaultProps = defaultProps

export default ButtonWithModalComponent