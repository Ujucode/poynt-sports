// Quill modules and formats configuration
export const quillModules = {
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

export const quillFormats = [
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
