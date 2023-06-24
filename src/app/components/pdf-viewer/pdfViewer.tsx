"use client";

import { useState } from "react";
import classNames from "classnames";

// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../../../../pdf-worker";
import { Loading } from "../Loading";
import "./pdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState("./resume.pdf");
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="w-full">
      <div
        className={classNames({
          "max-w-max": true,
          "m-auto": true,
        })}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loading size={50} />}
          className="drop-shadow-md mt-3"
        >
          {Array.from({ length: numPages! }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
