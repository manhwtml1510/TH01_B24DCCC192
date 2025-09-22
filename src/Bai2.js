import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const ColorBox = ({ color }) => (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: color,
        border: "2px solid black",
        marginTop: "20px",
      }}
    ></div>
  );

  return (
    <div>
      <h2>Bài 2: Bộ chọn màu</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      <ColorBox color={color} />
    </div>
  );
}

export default App;
