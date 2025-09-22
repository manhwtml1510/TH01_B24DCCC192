import { useState } from "react";

function App() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>

      <h3>Sản phẩm</h3>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} - {p.price}₫{" "}
            <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}₫
          </li>
        ))}
      </ul>

      <h4>Tổng tiền: {total}₫</h4>
    </div>
  );
}
export default App;
