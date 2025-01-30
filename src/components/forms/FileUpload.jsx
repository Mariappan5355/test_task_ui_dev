import { useState } from "react";

export const FileUpload = ({ files, onFilesChange }) => {
    const [dragging, setDragging] = useState(false);
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragging(true);
    };
  
    const handleDragLeave = () => {
      setDragging(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setDragging(false);
      const droppedFiles = Array.from(e.dataTransfer.files);
      onFilesChange(droppedFiles);
    };
  
    const handleFileChange = (e) => {
      const selectedFiles = Array.from(e.target.files);
      onFilesChange(selectedFiles);
    };
  
    return (
      <div className="mb-6">
        <div className="p-4 bg-blue-50 rounded-md">
          <div
            className={`border-2 border-dashed ${
              dragging ? 'border-blue-400 bg-blue-100' : 'border-blue-200'
            } rounded-md p-6 text-center`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex justify-center mb-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div className="text-sm text-gray-600">
              Drag here or{' '}
              <label htmlFor="file-upload" className="text-blue-500 cursor-pointer">
                Browse
              </label>
            </div>
            <div className="text-xs text-gray-400 mt-1">Format: JPEG, PNG, PDF</div>
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {files?.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              <strong>Files:</strong>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  