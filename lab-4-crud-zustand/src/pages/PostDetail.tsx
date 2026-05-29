import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

function PostDetail() {
  const { id } = useParams();

  const posts = usePostStore((state) => state.posts);
  const deletePost = usePostStore((state) => state.deletePost);

  const navigate = useNavigate();

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }
function handleDelete() {
  if (!post) return;

  deletePost(post.id);
  navigate("/trash");
}
  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <button
        onClick={() => navigate(`/posts/${post.id}/edit`)}
      >
        Edit
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default PostDetail;