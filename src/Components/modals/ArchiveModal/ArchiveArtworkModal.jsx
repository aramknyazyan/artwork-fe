import React from "react";
// ANTD components
import { Modal, message } from "antd";
// API
import { useDispatch } from "react-redux";
import { patchArtworkAction } from "../../../redux/action/patchArtwork";
// styles
import "./ArchiveArtworkModal.scss";

const ArchiveArtworkModal = ({ open, closeModal, id, submissionStatus }) => {
  const dispatch = useDispatch();

  const handleDeleteArtwork = async () => {
    dispatch(
      patchArtworkAction(id, {
        status: "Archived",
        submissionStatus: submissionStatus,
      })
    );

    await message.success("Artwork archived successfully!");

    closeModal();
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
          Are you sure you want to archive this Artwork?
        </div>

        <div className="modal-buttons">
          <div className="button" onClick={closeModal}>
            Cancel
          </div>

          <div className="delete-button" onClick={handleDeleteArtwork}>
            Archive
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ArchiveArtworkModal;
