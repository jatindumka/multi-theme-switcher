import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <div className="product-grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
