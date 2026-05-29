import { Link, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

function Posts() {
  const posts = usePostStore((state) => state.posts);

  const navigate = useNavigate();

  const activePosts = posts.filter(
    (post) => post.isDeleted === false
  );

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => navigate("/posts/new")}>
        Create Post
      </button>

      {activePosts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        activePosts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>

            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;