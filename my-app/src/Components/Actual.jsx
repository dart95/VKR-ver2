import React, { useState, useEffect } from "react";
export default function Actual() {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
