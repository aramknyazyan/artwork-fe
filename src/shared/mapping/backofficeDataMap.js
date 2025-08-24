export const backofficeDataMapping = (list) => {
  return list?.map(({ id, artworkMainPhoto, submissionStatus, artistName, currentLocation, createdDate, status }, index) => {
    const statusToShow = () => {
      if (status === "Archived") return status;

      return submissionStatus;
    };

    return {
      key: index,
      id: id,
      photo: artworkMainPhoto,
      status: statusToShow(),
      artist_name: artistName,
      country: currentLocation,
      submission_date: createdDate,
      actions: "actions",
    };
  });
};

export const artworkDataMapping = (list) => {
  return list?.map(({ id }, index) => ({
    key: index,
    id: id,
  }));
};
