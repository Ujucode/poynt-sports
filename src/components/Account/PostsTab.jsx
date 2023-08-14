import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { quillModules, quillFormats } from "../UI/TextEditorConfig";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";

const PostsTab = () => {
  const [content, setContent] = useState("");
  const uploadRef = useRef();
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    e.preventDefault();
    uploadRef.current.click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSave = (e) => {
    // Here you can save the content to your backend or do any other necessary actions
    e.preventDefault();
    console.log(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      "post-title": data.get("post-title"),
      post: content,
      tags: {
        achievements: data.get("achievements"),
        "event-update": data.get("event-update"),
        international: data.get("international"),
        national: data.get("national"),
        newsletter: data.get("newsletter"),
        "player-story": data.get("player-story"),
        regional: data.get("regional"),
        updates: data.get("updates"),
      },
      "post-image": data.get("post-image").name,
    });
  };

  return (
    <Box
      className="w-full flex flex-col gap-2 "
      component={"form"}
      onSubmit={handleSubmit}
    >
      {/* <FormControlLabel
        required
        control={<TextField id="event-title" />}
        label="Event Title"
        labelPlacement="top"
      /> */}
      <FormLabel>
        <Typography variant="h5" gutterBottom>
          Post Title
        </Typography>
      </FormLabel>

      <TextField id="post-title" name="post-title" placeholder="Post Title" />

      <FormLabel className="mt-2">
        <Typography variant="h5" gutterBottom>
          Post
        </Typography>
      </FormLabel>

      <ReactQuill
        placeholder="Tell your story..."
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        name="post"
      />
      <button
        onClick={handleSave}
        className="p-2 w-[5rem] h-10 mt-2 bg-emerald-500 text-white rounded-md "
      >
        Save
      </button>

      <FormLabel className="mt-2">
        <Typography variant="h5" gutterBottom>
          Category
        </Typography>
      </FormLabel>

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox />}
          label="Achievements"
          name="achievements"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Event Update"
          name="event-update"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="International"
          name="international"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="National"
          name="national"
        />

        <FormControlLabel
          control={<Checkbox />}
          label="News Letter"
          name="newsletter"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Player Story"
          name="player-story"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Regional"
          name="regional"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Updates"
          name="updates"
        />
      </FormGroup>

      <input
        ref={uploadRef}
        type="file"
        accept="image/*,.png,.jpg"
        hidden
        name="post-image"
        onChange={handleImageChange}
      />

      {image && (
        <Paper variant="outlined" className=" p-5 w-2/6 mt-10">
          <img
            src={image}
            alt="event img"
            className="object-contain object-center mx-auto "
          />
        </Paper>
      )}

      <button
        id="upload-img"
        className="p-2 w-40 bg-emerald-500 text-white rounded-md h-10"
        onClick={handleUpload}
      >
        {image ? "Change Image" : "Upload Post Image"}
      </button>
      <FormLabel htmlFor="upload-img" required>
        Max size 5 MB
      </FormLabel>

      <button
        type="submit"
        className="p-2 w-1/4 h-10 mt-20 bg-emerald-500 text-white rounded-md "
      >
        Create Post
      </button>
    </Box>
  );
};

export default PostsTab;
