import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function MyModal(props) {
  // 需要傳入的話
  const { alertWord } = props
  const [show, setShow] = useState(false)

  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        開啟
      </Button>

      <Modal
        show={show}
        onHide={handleCloseModal}
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertWord}</Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal
