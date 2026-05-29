import { usePostStore } from "../stores/post.store";

function Trash() {
  const posts = usePostStore((state) => state.posts);

  const recoverPost = usePostStore(
    (state) => state.recoverPost
  );

  const deletePostForever = usePostStore(
    (state) => state.deletePostForever
  );

  const deletedPosts = posts.filter(
    (post) => post.isDeleted === true
  );

  return (
    <div>
      <h1>Trash</h1>

      {deletedPosts.length === 0 ? (
        <p>No deleted posts.</p>
      ) : (
        deletedPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>

            <p>{post.content}</p>

            <button
              onClick={() =>
                recoverPost(post.id)
              }
            >
              Recover
            </button>

            <button
              onClick={() =>
                deletePostForever(post.id)
              }
            >
              Delete Permanently
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Trash;