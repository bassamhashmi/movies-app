import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

function NewMovieToast({ showNewMovieToast, closeShowNewMovieToast }) {
  const [position] = React.useState("top-end");

  return (
    <ToastContainer position={position}>
      <Toast show={showNewMovieToast} onClose={closeShowNewMovieToast}>
        <Toast.Header>
          <strong className="me-auto">Notification ~ Movies App</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>New movie added successfully!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default NewMovieToast;
