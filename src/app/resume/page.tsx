"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer/pdfViewer"), {
  ssr: false,
});

export default function PDF() {
  return (
    <div className="sm:w-full sm:min-h-[100vh] bg-gray-100">
      <PDFViewer />
    </div>
  );
}
