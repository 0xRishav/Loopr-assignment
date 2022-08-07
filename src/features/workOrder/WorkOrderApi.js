import WorkOrderData from "../../db/db";

export const fetchWorkOrderDataApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(WorkOrderData);
    }, 1500);
  });
};

export const addWorkOrderApi = async () => {
  return new Promise((resolve) => {
    const res = [
      ...WorkOrderData,
      {
        document_name: "13325234532532",
        upload_date: "2022-08-05T05:28:11.269Z",
        upload_percentage: "100",
      },
    ];

    setTimeout(() => {
      resolve(res);
    }, 1500);
  });
};
