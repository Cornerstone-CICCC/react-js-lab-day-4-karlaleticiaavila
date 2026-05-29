import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = usePostStore((state) => state.addPost);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addPost(title, content);
    navigate("/posts");
  }

  return (
    <div>
      <h1>Add Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />

        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default AddPost;