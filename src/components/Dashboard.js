import React, { useState } from "react";
import UploadWorkOrderView from "../features/workOrder/UploadWorkOrderView";
import WorkOrderView from "../features/workOrder/WorkOrderView";
import { useLocation } from "react-router-dom";
import Loader from "./Loader/Loader";
import { useSelector } from "react-redux";

function Dashboard() {
  const location = useLocation();
  const {
    workOrder: { loading },
  } = useSelector((state) => state);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : location.pathname === "/upload-work-order" ? (
        <UploadWorkOrderView />
      ) : (
        <WorkOrderView />
      )}
    </div>
  );
}

export default Dashboard;
