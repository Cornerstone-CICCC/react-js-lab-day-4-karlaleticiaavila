import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Trash from "./pages/Trash";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/trash">Trash</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/new" element={<AddPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;