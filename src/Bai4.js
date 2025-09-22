import { useState } from "react";
function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
  <div
    style={{
      border: "1px solid gray",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "15px",
    }}
  >
    <p>{text}</p>
    <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
    <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
  </div>
);
}

function App() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Nguyễn Đình Đức Mạnh có đẹp trai không?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}
export default App;
