import ActionButtons from "../../pages/BackOffice/components/actionButtons";

import { backofficeSatatusMap } from "../../shared/mapping/backofficeStatusMap";

export const columns = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
    width: "14%",
  },
  {
    title: "Photo",
    dataIndex: "photo",
    width: "14%",
    render: (text) => <img src={text} alt="img" className="mainPhoto" />,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    width: "14%",
    render: (text) => <p className={backofficeSatatusMap[text]}>{text}</p>,
  },
  {
    title: "Artist Name",
    dataIndex: "artist_name",
    sorter: (a, b) => a.artist_name.localeCompare(b.artist_name),
    width: "14%",
  },
  {
    title: "Country",
    dataIndex: "country",
    sorter: (a, b) => a.country.localeCompare(b.country),
    width: "14%",
  },
  {
    title: "Submission Date",
    dataIndex: "submission_date",
    sorter: (a, b) => a.submission_date.localeCompare(b.submission_date),
    width: "14%",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    width: "16%",
    render: (_, record) => {
      return <ActionButtons id={record.id} submissionStatus={record.status} />;
    },
  },
];
