import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Dropzone from "../../components/Dropzone";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWorkOrder } from "./workOrderSlice";

function UploadWorkOrderView() {
  const [pdfFile, setPdfFile] = useState(null);
  const [isPdf, setIsPdf] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="px-8 py-11 flex flex-col justify-center items-start">
      <div className="flex justify-start items-center">
        <Link to="/">
          <IoMdArrowBack size={30} />
        </Link>
        <div className="text-2xl ml-5 font-medium">Upload Work Order</div>
      </div>
      <Dropzone pdfFile={pdfFile} setPdfFile={setPdfFile} setIsPdf={setIsPdf} />
      {!isPdf && (
        <span className="text-red mb-2">*Please select a pdf file</span>
      )}
      <button
        className="py-2.5 px-5 rounded-md text-white font-medium"
        disabled={pdfFile ? false : true}
        style={{ background: pdfFile ? "#3687D2" : "#C4C4C4" }}
        onClick={() => {
          dispatch(addWorkOrder());
          navigate("/", { replace: true });
        }}
      >
        UPLOAD
      </button>
    </div>
  );
}

export default UploadWorkOrderView;
