import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

function EditPost() {
  const { id } = useParams();

  const navigate = useNavigate();

  const posts = usePostStore((state) => state.posts);

  const updatePost = usePostStore(
    (state) => state.updatePost
  );

  const post = posts.find((post) => post.id === id);

  const [title, setTitle] = useState(
    post?.title || ""
  );

  const [content, setContent] = useState(
    post?.content || ""
  );

  if (!post) {
    return <h1>Post not found</h1>;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    updatePost(id!, title, content);

    navigate(`/posts/${id}`);
  }

  return (
    <div>
      <h1>Edit Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <br />

        <button type="submit">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;