import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSave = () => {
    // Here you can save the content to your backend or do any other necessary actions
    console.log(content);
  };

  return (
    <div className="">
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
      />
      <button
        className="bg-emerald-500 text-white rounded-md w-20 h-10 mt-2"
        onClick={handleSave}
      >
        Edit
      </button>
    </div>
  );
};

// Quill modules and formats configuration
const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    [{ align: [] }],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "align",
];

export default TextEditor;
