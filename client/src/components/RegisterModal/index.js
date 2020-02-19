import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import SquareApp from "../SquareApp"
import "./style.css";

function SignupModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // logic for dynamically rendering the pay form
    // make a call to the DB to get all of the users bills
    // check the paid boolean to see if any events have been paid for
    // if an event has been paid for, dont show the squareapp component
  
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
            {props.statement}
            </p>
            <SquareApp
              price={props.price}
              eventId={props.eventId}
              eventId={props.eventId}
              closeModal={handleClose}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose} eventId={props.eventId}>
              {props.closeBtnText}
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default SignupModal;