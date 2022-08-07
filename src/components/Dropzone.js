import React, { useRef, useState } from "react";
import { RiFileUploadFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Dropzone({ setPdfFile, setIsPdf, pdfFile }) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (e.dataTransfer.files[0].type === "application/pdf") {
        setPdfFile(e.dataTransfer.files[0]);
        setIsPdf(true);
      } else {
        setIsPdf(false);
      }
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].type === "application/pdf") {
        setPdfFile(e.target.files[0]);
        setIsPdf(true);
      } else {
        setIsPdf(false);
      }
    }
  };

  console.log("file", pdfFile);

  return (
    <form
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center items-center flex-col border-2 border-grey border-dashed w-full h-56 rounded-md my-10 relative"
    >
      <RiFileUploadFill size={30} color="#3687D2" />
      <div className="flex">
        {pdfFile ? (
          pdfFile?.name
        ) : (
          <>
            <div>Drag a PDF file here or</div>

            <label
              for="file"
              className="underline text-blue ml-1 relative cursor-pointer"
            >
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={handleChange}
              />
              browse
            </label>
          </>
        )}
      </div>
      {isDragActive && (
        <div
          className="absolute w-full h-full"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </form>
  );
}

export default Dropzone;
