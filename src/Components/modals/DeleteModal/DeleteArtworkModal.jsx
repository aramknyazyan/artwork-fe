import React from "react";
import { useNavigate } from "react-router-dom";
// ANTD components
import { Modal, message } from "antd";
// API
import { useDispatch } from "react-redux";
import { patchArtworkAction } from "../../../redux/action/patchArtwork";
// styles
import "./DeleteArtworkModal.scss";

const DeleteArtworkModal = ({ open, closeModal, id, submissionStatus }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteArtwork = async () => {
    dispatch(
      patchArtworkAction(id, {
        status: "Deleted",
        submissionStatus: submissionStatus,
      })
    );

    await message.success("Artwork deleted successfully!");

    navigate("/backoffice");
  };

  return (
    <Modal
      title="Delete Modal"
      visible={open}
      onOk={closeModal}
      onCancel={closeModal}
      className="delete-modal"
    >
      <div className="content">
        <div className="modal-title">
          Are you sure you want to delete this Artwork?
        </div>

        <div className="modal-buttons">
          <div className="button" onClick={closeModal}>
            Cancel
          </div>

          <div className="delete-button" onClick={handleDeleteArtwork}>
            Delete
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteArtworkModal;
