import React, { useState } from "react";
// ANTD components
import { Row } from "antd";
// modals
import HistoryModal from "../modals/HistoryModal/HistoryModal";
import DeleteArtworkModal from "../modals/DeleteModal/DeleteArtworkModal";
// icons
import { VscEye } from "react-icons/vsc";
// styles
import "./ArtworkActionButtons.scss";
import { ARTWORK_STATUSES_ENUM } from "../../shared/constants";
import ArchiveArtworkModal from "../modals/ArchiveModal/ArchiveArtworkModal";

const ArtworkActionButtons = ({ isAdmin, status, id }) => {
  const [openHistoryModal, setOpenHistorymodal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);

  const handleToggleHistoryModal = () => {
    setOpenHistorymodal((prev) => !prev);
  };

  const handleToggleArchiveModal = () => {
    setOpenArchiveModal((prev) => !prev);
  };

  const handleToggleDeleteModal = () => {
    setOpenDeleteModal((prev) => !prev);
  };

  return (
    <Row className="artwork-action-buttons-container">
      <Row className="button" onClick={handleToggleHistoryModal}>
        <VscEye className="icon" size={18} />
        <Row>View History</Row>
      </Row>

      {(status === ARTWORK_STATUSES_ENUM.Rejected_Counter_Offer ||
        status === ARTWORK_STATUSES_ENUM.Rejected_Price_Offer) &&
        isAdmin && (
          <Row className="button" onClick={handleToggleArchiveModal}>
            <VscEye className="icon" size={18} />
            <Row>Archive</Row>
          </Row>
        )}
      {(status === ARTWORK_STATUSES_ENUM.Rejected_Counter_Offer ||
        status === ARTWORK_STATUSES_ENUM.Rejected_Price_Offer) &&
        isAdmin && (
          <Row className="button delete" onClick={handleToggleDeleteModal}>
            <VscEye className="icon" size={18} />
            <Row>Delete</Row>
          </Row>
        )}

      {openHistoryModal && (
        <HistoryModal
          open={openHistoryModal}
          closeModal={handleToggleHistoryModal}
        />
      )}

      {openDeleteModal && (
        <DeleteArtworkModal
          open={openDeleteModal}
          closeModal={handleToggleDeleteModal}
          submissionStatus={status}
          id={id}
        />
      )}

      {openArchiveModal && (
        <ArchiveArtworkModal
          open={openArchiveModal}
          closeModal={handleToggleArchiveModal}
          submissionStatus={status}
          id={id}
        />
      )}
    </Row>
  );
};

export default ArtworkActionButtons;
