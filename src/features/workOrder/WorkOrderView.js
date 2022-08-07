import React from "react";
import { useSelector } from "react-redux";
import WorkOrderRow from "../../components/WorkOrderRow";
import { Link } from "react-router-dom";

function WorkOrderView() {
  const {
    workOrder: { workOrderData, loading, error },
  } = useSelector((state) => state);
  return (
    <div className="px-7 flex flex-col mt-10">
      <div className="flex justify-between">
        <div className="text-3xl font-medium">Work Order</div>
        <div className="flex justify-center items-center">
          <div className="font-medium mr-12">Count: {workOrderData.length}</div>
          <Link to="/upload-work-order">
            <button className="bg-blue py-2.5 px-5 rounded-md text-white font-medium">
              Upload Work Order
            </button>
          </Link>
        </div>
      </div>
      <div className="text-left">
        <div className="flex justify-start items-center mt-10 ml-9">
          <input
            style={{ minWidth: "52px" }}
            type="checkbox"
            className="mr-12"
          />
          <div style={{ minWidth: "200px" }} className="min-w-min font-medium">
            Document Name
          </div>
          <div style={{ minWidth: "160px" }} className="min-w-min font-medium">
            Uploaded Date
          </div>
          <div
            style={{ minWidth: "200px" }}
            className="text-center min-w-min font-medium"
          >
            Uplaod Status
          </div>
          <div
            // style={{ minWidth: "200px" }}
            className="min-w-min text-center font-medium"
          >
            Actions
          </div>
        </div>

        {workOrderData.map((workOrder) => (
          <WorkOrderRow {...workOrder} />
        ))}
      </div>
    </div>
  );
}

export default WorkOrderView;
