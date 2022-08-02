export const backofficeDataMapping = (list) => {
  return list?.map(
    (
      {
        id,
        artworkMainPhoto,
        submissionStatus,
        artistName,
        currentLocation,
        createdDate,
      },
      index
    ) => ({
      key: index,
      id: id,
      photo: artworkMainPhoto,
      status: submissionStatus,
      artist_name: artistName,
      country: currentLocation,
      submission_date: createdDate,
      actions: "actions",
    })
  );
};

export const artworkDataMapping = (list) => {
  return list?.map(({ id }, index) => ({
    key: index,
    id: id,
  }));
};
