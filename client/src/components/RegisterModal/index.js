import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import SquareApp from "../SquareApp"
import "./style.css";

function SignupModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Register
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            {props.body}
            </p>
            <p>
            Price: ${props.price}
            </p>
            <p>
            {props.statement}
            </p>
            <SquareApp
              price={props.price}
              eventId={props.eventId}
              type={props.type}
              eventName={props.eventName}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type={props.type} eventId={props.eventId} eventName={props.eventName}>
              {props.closeBtnText}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default SignupModal;