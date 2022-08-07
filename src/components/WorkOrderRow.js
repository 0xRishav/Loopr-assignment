import React from "react";
import getFormattedDate from "../utils/getFormattedDate";
import { Link } from "react-router-dom";

function WorkOrderRow({ document_name, upload_date, upload_percentage }) {
  return (
    <div className="flex justify-start items-center mt-10 ml-9">
      <input style={{ minWidth: "52px" }} type="checkbox" className="mr-12" />
      <div style={{ minWidth: "200px" }} className="min-w-min font-normal">
        {document_name}
      </div>
      <div style={{ minWidth: "160px" }} className="min-w-min font-normal">
        {getFormattedDate(upload_date)}
      </div>
      <div
        style={{ minWidth: "200px" }}
        className="text-center min-w-min font-normal"
      >
        <div className="flex justify-center items-center">
          <div>{upload_percentage}%</div>
          <div className="bg-light_green rounded-md h-1.5 w-5/12 ml-1.5 relative">
            <div
              className="bg-dark_green rounded-md h-1.5 ml-1.5 absolute left-0 top-0 m-0"
              style={{ width: `${upload_percentage}%`, margin: 0 }}
            />
          </div>
        </div>
      </div>

      <div style={{ minWidth: "200px" }} className="min-w-min font-normal">
        <Link to="#" className="text-blue">
          {"View Work Order >>"}
        </Link>
      </div>
    </div>
  );
}

export default WorkOrderRow;
